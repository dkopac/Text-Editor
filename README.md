# Text-Editor

## Table of Contents
[1.Description](#Description)

[2.Installation](#Installation)

[3.Acceptance Criteria](#Acceptance-Criteria)

[4.Testing](#Testing)

[5.Usage](#Usage)

[6.Demo's](#Demo's)

[7.Submission](#Submission)

[8.Questions](#Questions)

## Description
Module 19 Challenge was to use the starter code provided to make JATE (Just Another Text Editor) using PWAs. Progressive Web Apps (PWAs) are applications used by web technologies that can run on all devices and from a single codebase. PWAs can also be used online or offline. 

## Installation
Node must be installed on your machine in order to build the server side of the database and this also creates the dist folder which contains the minimized version of your source code. dist is installed by running ```npm build```. 

```npm start``` will start up the application and start the server.

## Acceptance Criteria
GIVEN a text editor web application

WHEN I open my application in my editor

THEN I should see a client server folder structure

WHEN I run `npm run start` from the root directory

THEN I find that my application should start up the backend and serve the client

WHEN I run the text editor application from my terminal

THEN I find that my JavaScript files have been bundled using webpack

WHEN I run my webpack plugins

THEN I find that I have a generated HTML file, service worker, and a manifest file

WHEN I use next-gen JavaScript in my application

THEN I find that the text editor still functions in the browser without errors

WHEN I open the text editor

THEN I find that IndexedDB has immediately created a database storage

WHEN I enter content and subsequently click off of the DOM window

THEN I find that the content in the text editor has been saved with IndexedDB

WHEN I reopen the text editor after closing it

THEN I find that the content in the text editor has been retrieved from our 
IndexedDB

WHEN I click on the Install button

THEN I download my web application as an icon on my desktop

WHEN I load my web application

THEN I should have a registered service worker using workbox

WHEN I register a service worker

THEN I should have my static assets pre cached upon loading along with subsequent 
pages and static assets

WHEN I deploy to Heroku

THEN I should have proper build scripts for a webpack application

## Testing
RUN ```npm start```

Open browser to http://localhost:3000 enter a value on one of the lines than click the blue banner and refresh the page to see if the value you entered in the code line is saved.

## Usage
This webpage can be used to edit text.

## Demo's
[!Screenshot](./assets/PWA%20Assignment.gif)

[!Screenshot](./assets/Screenshot%202023-07-06%20093235.png)

## Submission
Text-Editor repo has been deployed to GitHub and Heroku.

GitHub: https://github.com/dkopac/Text-Editor.git

Heroku: https://obscure-thicket-66768-5af8f2fee6ce.herokuapp.com/

## Questions
Please feel free to reach out anytime.

Email: dkopac96@gmail.com

GitHub: https://github.com/dkopac