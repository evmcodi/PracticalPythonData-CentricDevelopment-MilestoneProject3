# NutriApp



A daily nutrition tracking app where you can enter the foods that you eat daily and keep track of your nutrition consumtion. 

You can choose foods from a search of a MongoDB database containing simple foods. 

[Live Deployment](https://ntrtnapp.herokuapp.com)

If a certain food isn't available in the database you can add this food to the database through the app.

This app is built using the Flask framework and uses a MongoDB Atlas cluster.


## UX




### Strategy

The goal for this site is to make it easy and intuitive for users to keep a record of their daily calories and nutrition. 

#### User Stories

- As an end user, I want to keep track of my daily meals and the calories and nutrition in those foods so to follow a healthy diet. I want the calories to be automatically calculated by the app so I don't have to spend as much time manually calculating calories and nutrition numbers.



### Scope

NutriApp has a content scope focused on food items and their nutrients. The user can create, retrieve, edit and delete notes in the database, and can add them to their daily nutrition page.


### Structure

The site's content structure contains five main views.

- Home: An introduction to the site with a dynamic counter of items in the mongodb collection.
- Daily Nutrition: A page that lists your daily food consumption and calculates the total calories.
- Food Database: A search page for accessing food items and their nutrients from the database.
- Add food: A view to add new foods and their nutrition values to the database.
- Edit food: A view to edit foods and their nutrients in the database




### Skeleton

The site's content skeleton include a list of daily foods that can be added to or removed. For interaction with the database, there is a searchbar for the user to search for foods, and buttons to edit and delete the food, or add it to their daily nutrition page. The user can also click a button to add a food and it's nutrients to the open database.

![Desktop Demo](/assets/wireframes/dayview-desktop.png "Desktop Demo")
![Desktop Demo](/assets/wireframes/dayview-mobile.png "Desktop Demo")





### Surface

The colour scheme is based on a natural green colour to give users a sense of natural, healthy foods.

All text and elements are suitably contrasted with the backgrounds to ensure readability.



## Technologies Used

Languages:
- HTML
- CSS
- Javascript
- Python

Libraries:
- JQuery
- Bootstrap 4
- Flask
- pymongo


## Features

### Features implemented


#### Create, Retrieve, Update and Delete items with the open food database.
Users can succesfully use CRUD features through the user interface.

#### Daily nutrition view
The user can add foods that they eat to the daily nutrition view, and can see the total calories consumed. The user can also clear the page of items when they start to track their consumption on a new day.

#### Responsive Design.
Users on mobile, tablet, laptop and desktop can use all the features of the web app.


### Features to Implement


#### A way to keep track of food consumption over a sequence of days.

This would allow a user to see their food consumption history and to adjust their diet if necessary.



#### A 'statistics' page for users to see their progress

A statistics page could include graphs of their nutrient consumption over time, and could include their weight progress if they were trying to gain or lose weight.



## Testing

### Process

The site was tested on multiple devices to ensure consistent and working deployment of the web app. These include a Linux desktop with Firefox, a Windows 10 laptop with Chrome, a Sony Xperia with Firefox and a Google Nexus table with Chrome.

All buttons and interactive features have been tested manually in order to ensure that they work as expected. 

A defensive design process was used to ensure no sequence of user interactions could result in an error.



### Issues Fixed

#### Jinja does not work in javascript functions called after the page has loaded.

i.e. You can’t use {{url_for(’’)}} in a jquery function because this function is called after the jinja has done it’s thing …

This was overcome by implementing templating in javascript for these functions.




## Deployment

NutriApp is hosted on heroku [here](https://ntrtnapp.herokuapp.com).

In order to deploy, the config variables for the PORT and IP for the mongodb cluster had to be set on the heroku dashboard.

I linked my Github and Heroku accounts to manually deploy to the heroku app when the github code is changed. This can be set up in the Heroku dashboard under 'Deploy'.


## Credits

### Libraries used

- JQuery
- Bootstrap 4
- Flask
- Pymongo

### Devlopment tools used

#### VSCode

- Free IDE developed by Microsoft.

#### Live server extension for VSCode 
- Auto-reloads the site preview in the browser after a file is edited and saved. 
- Also allows viewing and testing your site on other devices connected to the same local network.
- https://github.com/ritwickdey/vscode-live-server

#### Beautify css/sass/scss/less
- Extension for VSCode that allows instant formatting of CSS files with Ctrl-Shift-I shortcut.

#### Firefox & Developer Tools
- Browser with developer tools for previewing UI.

#### Git & Github
- Git is used for version control of code is preinstalled on most Linux distributions. 
- Github.com is used for storing version-controlled code online and as a cloud backup.

#### Heroku
- Heroku is used for deployment of the code online.

#### quickMockup
- https://jdittrich.github.io/quickMockup/

- Free open sourece tool for wireframing websites. Allows export to html.




<br><br>
*This site is not intended for commercial use*
