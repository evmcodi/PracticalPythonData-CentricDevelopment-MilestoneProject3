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
    mdbcollection_food.update({'_id': ObjectId(food_id)},
                 {
                     'food_name': request.form.get('food_name'),
                     'category_name': request.form.get('category_name'),
                     'food_description': request.form.get('food_description'),
                     'due_date': request.form.get('due_date'),
                     'is_urgent': request.form.get('is_urgent')
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
