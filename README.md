# item-catalog

A catalog of categories and items, developped with angular2 and django.

## Description

Item catalog is a web application, which allows users to do mainly the following:
- navigate the catalog,
- edit, add or remove categories
- edit, add or remove items

## Getting started

### 1. Clone the github repository

To deploy the web application locally, clone this repository, set up the backend, then finally the frontend part of the application. 

### 2. Set up the backend server with django

#### Install dependencies

Install python v2.7.10: https://www.python.org/downloads/

Install pip: https://pip.pypa.io/en/stable/installing/

Install required packages
In your terminal, navigate to the project's root folder and type

    pip install -r /backend/requirements.txt

#### Build and run the application

In your terminal, navigate to the project's backend folder and type

    python manage.py runserver

The backend provides the following endpoints:

http://localhost:8000/categories
http://localhost:8000/category/[category id]
http://localhost:8000/items
http://localhost:8000/item/[item id]

Those endpoints are available in json. Simply add .json at the end of the url.

### 3. Set up the frontend with angular2

#### Install dependencies

Install Node.js and npm on your machine. This app requires node v5.x.x or higher and npm 3.x.x or higher. To check which version you are using, run node -v and npm -v in a terminal window.

Using npm from the command line, install the packages listed in package.json with the command:

    npm install

Error messages—in red—might appear during the install, and you might see npm WARN messages. As long as there are no npm ERR! messages at the end, you can assume success.

Install bootstrap: http://getbootstrap.com/getting-started/#download

#### Build and run the application

Open a terminal window and enter this command:

    npm start

That command runs the following two parallel node processes:

The TypeScript compiler in watch mode.
A static file server called lite-server that loads the application in a browser and refreshes the browser when application files change.
In a few moments, a browser tab should open and display the app.

## Libraries used

The website is built using angular2 for the backend and django for the frontend

Additionnal libraries and ressources used include:
- bootstrap: http://getbootstrap.com/
- jquery: http://jquery.com/

## Copyright

This project is part of the udacity full stack web developper nano degree (https://www.udacity.com/course/full-stack-web-developer-nanodegree--nd004). 

It is not licensed.

