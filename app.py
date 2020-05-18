import os
from flask import Flask, render_template, redirect, request, url_for, request
from flask_pymongo import PyMongo
from bson.objectid import ObjectId

app = Flask(__name__)
app.config["MONGO_DBNAME"] = 'OGFF'
app.config["MONGO_URI"] = os.getenv('MONGO_URI', 'mongodb://localhost')

mongo = PyMongo(app)

mydatabase = mongo.db.OpenGenericFoodFacts

# Create a text index so items in the index can be searched.
mydatabase.create_index([('name_en', 'text')])


@app.route('/')
@app.route('/today')
def today():
    return render_template("today.html")


@app.route('/get_foods')
def get_foods():
    mybeetroot = "beetroot"
    return render_template("foods.html",
                           # foods=mongo.db.OpenGenericFoodFacts.find())
                           # foods = mydatabase.find())
                           foods=mydatabase.find({"$text": {"$search": mybeetroot}}))


@app.route('/search_foods')
def search_foods():
    search = request.args.get('search')
    #   return redirect(url_for('success', name=user))
    return render_template("foods.html",
                           foods=mydatabase.find({"$text": {"$search": search}}))


@app.route('/success/<name>')
def success(name):
    return 'welcome %s' % name


if __name__ == '__main__':
    app.run(host=os.environ.get('IP'),
            port=int(os.environ.get('PORT')),
            debug=True)
