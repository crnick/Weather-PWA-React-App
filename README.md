# Introduction
This is an example of a simple progressive web app which has the feel and functionality of a native app. In this project we have focused on the concept of service worker running in background which not only allows us to cache resources but also provides a way to handle our application when it is offline.

This also includes another important file which is Manifest.json.
This contains information that tells how your PWA should appear and function.

# SetUp
The project provides a search interface through which user is able to query weather related information. 

The ServiceWorker.js file handles the necessary steps to install, fetch and activate a service worker, by caching files and handling the offline mode. 

The main App.js file handles all the UI related built using React, while the api folder has the actuall functionality of fetching the weather related information.

We have used a third party API service in order to fetch weather related information based on the query provided by the user.

# Technologies Used
HTML5, CSS3, Javascript, React

