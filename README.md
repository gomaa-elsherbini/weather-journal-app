# Weather-Journal App Project

## Overview

An **asynchronous** web app that uses Web API and user data to **dynamically** update the UI for a Weather-Journal App.

## project description

- It is an asynchronous web app that uses nodejs and express and asynchronous javascript promises.
- User has to enter a zip code for any city he want and his feeling then click the generate button to get information.
- The app takes the user inputs, then calling an external web api to get all wanted information.
- Then storing these information on our app.
- The information can retrived and dynamically displayed on screen to the user as soon as clicking generate button.

## Table of Contents

    WEATHER-JOURNAL-APP
    - node_modules
    - website
        - app.js
        - index.html
        - style.css
    - package-lock.json
    - package.json
    - server.js
    - README.md

## languages used in project

- Javascript(useing nodejs and express framewark).
- HTML
- CSS

## Technolegies used in the project

- node js and express environment.
- express framewark to bulid a server to run app locally.
- using express to make a GET and POST routes on a server side.
- using express get and post methods to hanlde http requests on a client side.
- Project Dependencies of body-parser as middleware and cors for cross origin allawence.
- asynchronous javascript promises with fetch() method and chaining anthor promises.
- javascript Event Listeners.

## main jobs of the progect

- Create API credentials on OpenWeatherMap.com to gat a personal api key to make a calls.
- How to setup a server to run a web app locally.
- How to make a GET and POST requests useing an asynchronous javascript promises with the fetch() to
  get data from a web app or an external api and store these data in the app and retrive it again by chains another
  promises to do another taskes with these data.
- How to define the GET and POST routes on a server side to handle the server response to the get and post requests
  made on the client side.

## starting the project

### Server-Side code

1. with Node and express environment, install express, create an instance of app, install body-parser and cors backages and api endpoint that holds the app data.
2. setting up a server.
3. make a get route to handle the get reqests from the client side.
4. make a post route to handle the post reqests from the client side.

### Client-Side code

1. create a global variabls of personal api key and baseURL.
2. create an asynchronous javascript promises to make a get request to weathermap api with a URL consists of personal api, baseURL and the user input
   zip code to get a weather data.
3. create chainnig another promise after getting the weather data to make a post request to store all data(from api and user input) on our app.
4. create chainnig another promise to make a get request to retrive all data from our app to daynamically update UI (selected DOM elements have their innerHTML properties dynamically set according to data returned by the app route).

## project uses

This web app can be used as a Weather-Journal App that allows the user to get weather information about any city.
