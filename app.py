import os
from flask import Flask, render_template, redirect, request, url_for, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

import logging

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'OGFF'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)

mdbcollection_food = mongo.db.OpenGenericFoodFacts

# Create a text index so items in the index can be searched.
mdbcollection_food.create_index([('name_en', 'text')])


@app.route('/')
@app.route('/home')
def home():
    count = mdbcollection_food.estimated_document_count()
    return render_template("home.html", count=count)


@app.route('/today')
def today():
    return render_template("today.html")


@app.route('/get_foods')
def get_foods():
    return render_template("foods.html")


@app.route('/search_foods')
def search_foods():
    search = request.args.get('search')
    #   return redirect(url_for('success', name=user))
    return render_template("foods.html", foods=mdbcollection_food.find({"$text": {"$search": search}}))


@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name


# Add a new food
@app.route('/add_food')
def add_food():
    return render_template('addfood.html')


@app.route('/insert_food', methods=['POST'])
def insert_food():
    mdbcollection_food.insert_one(request.form.to_dict())
    return redirect(url_for('get_foods'))


# Edit food, delete food.
@app.route('/edit_food/<food_id>')
def edit_food(food_id):
    the_food = mdbcollection_food.find_one({"_id": ObjectId(food_id)})
    app.logger.info(the_food)
    return render_template('editfood.html', food=the_food)


@app.route('/update_food/<food_id>', methods=["POST"])
def update_food(food_id):
    mdbcollection_food.replace_one({'_id': ObjectId(food_id)},
                 {
                     'name_en': request.form.get('name_en'),
                     'energy_100g_cal': request.form.get('energy_100g_cal'),
                     'fat_100g': request.form.get('fat_100g'),
                     'saturates_100g': request.form.get('saturates_100g'),
                     'carb_100g': request.form.get('carb_100g'),
                     'sugars_100g': request.form.get('sugars_100g'),
                     'fibre_100g': request.form.get('fibre_100g'),
                     'protein_100g': request.form.get('protein_100g'),
                     'salt_100g': request.form.get('salt_100g')
                 })
    return redirect(url_for('get_foods'))


@app.route('/delete_food/<food_id>', methods=['POST'])
def delete_food(food_id):
    mdbcollection_food.delete_one({'_id': ObjectId(food_id)})
    app.logger.info('test')
    return redirect(url_for('get_foods'))


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
