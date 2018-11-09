# The Grand Tutorial

The Grand Tutorial is an x-part tutorial to construct an alpha project based on React and a serverless backend. 
Using speedily configurable services we can spin up quick functionality from lightweight SaaS providers. This will include data visualization, personalization and search functionality.

## The app
The app we are building will be a simple rebuild of the current UniStats website. It will have a homepage, a page for each university and a search page . Users will be able to create an account on this website and save universities to a list of favorites. 

## Part One: Build a React app
Create the initial React app with a simple home page and GOV.UK styling

## Part Two: Host the app on Heroku
Host the initial React app on the web

## Part Three: University pages
Add structure to the app with university pages

## Part Four: Content on S3
Serve the university page data from json files stored in S3 using WebPortal and Lambda, configured with Serverless

## Part Five: Search
Add a search page to the React app using Algolia

## Part Six: Data viz
Add data visualizations to the React app using Highcharts

## Part Seven: User accounts
Add a user pool with authentication using Cognito deployed with Serverless

## Part Eight: Personalisation
Allow users to favorite universities using DynamoDB deployed with Serverless

## Part Nine: Testing and CI/CD
Deploy the React app using Heroku pipelines


## React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
