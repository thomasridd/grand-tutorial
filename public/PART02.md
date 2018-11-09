# Part Two: To the web
Now we have an app we need to do a spot of housekeeping

### Create a Github repository
And push your code to there

### Create a Heroku app 
To give our React app a web presence

In the normal course we’d need to serve React using node and express and similar. Fortunately because we have used `npm init create-app` there is a shortcut

[Deploying React with Zero Configuration | Heroku](https://blog.heroku.com/deploying-react-with-zero-configuration)

I avoid the Heroku command line - personal preference. For me the sequence was

- Sign in to Heroku
- Create an app
- Link it to the GitHub repo on the Deploy tab
- Link it to `https://github.com/mars/create-react-app-buildpack.git` in the Buildpacks section of the settings tab
