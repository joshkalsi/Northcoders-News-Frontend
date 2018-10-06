# Northcoders News

NC News is a Reddit-style article aggregator. Articles are divided into various topics of interest, and each article also has comments attached to it. Logged in users can vote on existing articles and topics, and may also submit new ones. Users may also delete their comments (but not any belonging to someone else). You can also search for a username to see a basic profile view.

## Try it out:
You can see a live version at https://ncnews-joshkalsi-frontend.herokuapp.com/. In order to post articles and comments, you must be logged in. By default you are logged in as user jessjelly - to choose a different user, simply log out and enter one of these usernames (there is no password authentication present):
* jessjelly
* weegembump
* tickle122
* grumpy19
* happyamy2016
* cooljmessy

Note that it may take a little time for the articles to load on first visit - the backend is also hosted on Heroku and can take some time to start up.

## Back-end

You can see the source code for the back-end API at https://github.com/joshkalsi/Northcoders-News-Backend, with a live version hosted at https://ncnews-joshkalsi-backend.herokuapp.com/.

## Requirements and Installation

This project requires Node.JS v10.6.0 or higher. You can download Node here: [Windows](http://blog.teamtreehouse.com/install-node-js-npm-windows) | [Mac](http://blog.teamtreehouse.com/install-node-js-npm-mac) | [Linux](http://blog.teamtreehouse.com/install-node-js-npm-linux).

To install, simply clone this repository down, `cd` into the folder and run `npm install`. You can then use `npm start` to start a locally hosted version.

## Detailed Interactions

**Top Navigation Bar** This has 3 elements - the NCNews logo, a user search, and a login form. If you click the NCNews logo, it will return you to the homepage. The user search takes a username to find, and will take you to the required users profile if it exists. The login form will allow you to login as one of the users given above - no password is required in this version. Once logged in, you will see the users avatar and name.

**Homepage**: Here you can see a list of all articles, ordered by time. Clicking on an article will take you to its page where you can see its full body and associated comments. You can vote the article up or down with the arrows to the right - once you vote it is locked, so choose wisely!
You can sort the articles by most recent (default), highest votes and randomly with the buttons to the top right of the list. You can also filter articles down to more specific topics with the list box on the far right of the screen.

**Topic-specific Article List** This is almost identical to the Homepage view, but only articles for the given topic are present. You can also submit an article about the specific topic at the top of the page.

**Article Submit** This page allows you to submit an article, provided you are logged in. You need to provide a title and an article body - once you submit, you will be redirected to the page for the new article.
 
**Article View** This page contains the title, timestamp and body for an article, along with the votes and user who posted it. You can vote as on the homepage by clicking the arrows, and if you click the user's name you will be taken to their profile. Below this is a link back to the article list, and then all comment information. You can submit a comment if you are logged in - simply input the text you wish to have as the comment body.
Like articles, you can vote on comments with the arrows, and sort them based on time or vote number. You can also see who left the comment and when.

**User Profile** This page contains the user's avatar, along with their full name and username.

## Built with:
* [React](https://reactjs.org/) - User interface framework
* [React Router](https://github.com/ReactTraining/react-router) - React page routing
* [Axios](https://www.npmjs.com/package/axios) - HTTP Client for API requests
* [Moment](http://momentjs.com/) - Date/Time display and manipulation for timestamps
* [Lodash](https://lodash.com/) - .shuffle function for random sort
