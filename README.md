# Recipe App
This is implementation of fcc take home project - https://learn.freecodecamp.org/coding-interview-prep/take-home-projects/build-a-recipe-box/ .

App has been implemented with 
1. Front end -
    1. React and styled components 
    2. Jest, enzyme and jest-styled-components for testing
2. Back end -
    1. Express.js - for node server
    2. Mongoose and mongodb - for saving recipes
    3. Jets - for testing

## Directory structure   
As the app consists of both backend and frontend, we have used a single repository to serve both parts of the app.
The main app is express app which serves all api endpoints and also the react app.
Express app is in source directory while all client side code is in client directory.

## Running Locally
To run app locally
```
    npm run dev
```
You will also need to inject following variables to for mongodb
1. User
2. Password
3. mongo db url

## Testing
We use jest to run tests. run ```npm test``` to run tests for both backend and client apps.

