# Matches app
This project was created using Javascript, React, Router, Axios, and Dayjs.
Be careful to use Router 6 or higher.

# Execution
Clone the folder and run:
$ npm install, and then 
$ npm start

# Variables and Keys:
You need to use your own Key access to the football-data API.
Replace the const KEY value in src/components/env.js with your own Key.

# Description
This app was created as an SPA (Single Page App), it uses the React framework which in turn uses the Routers library to navigate smoothly between all the pages, one page per each of the free access leagues in the football-data API.

The addresses are created statically, the code fills each view with the data obtained from the API.

For each of the leagues a component was created in which the app feeds the data obtained from the response.

The queries are performed using the Axios library, using the resources routing from the API documentation.

As a data filtering is required. I implemented a componet called date.js, in which two variables are created for the date 2 days in the past and for the date 7 days in the future. For this, I use the Dayjs framework.
These variables are feed in each league component and then used to assemble the query filtering.

Some basic Css is applied in each of the components.

# Possible Improvements
1- It would be good to create the components dinamycally, so that the views are generated according to the tier access of the user.

2- By creating the components dinamically, the routing could be performed in the same way.

3- It would be great to enrich the data with more information about players and teams.

4- The current implementation does not make use of all the cappabilities of React. It would be cool to add props and to improve the presentation of the imformation, so that the user can pick and display the information that they need.

5- Maybe use a backend framework to separate the requests from the frontend management performed by React.

6- In terms of presentation, it would be good to add some images and styles, I reckon that the app looks very amaterurish, but I'm proud of what I achieved.

Thanks a lot for the opportunity.




