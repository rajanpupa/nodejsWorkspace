Veri basic app, just for getting started.
Simple server which returns a response.

We don't build large application this way.

### Initialization
Use this command to create a json file called package.json
```
npm init
```
This file basically has the entry point of our application and other dependencies which is required by our app to run.

# Express generator
```
npm instal -g express-generator
express appName

npm install
npm start
```

# Nodemon
``` npm install -g nodemon```

* this will restart the application if any file is changed. great for development phase
```nodemon app```

#### Handling url parameters

* file app01.js is an example of handeling the url parameters
* `node app01`
* then type this in your browser `http://localhost:8080/?data=put_some_text_here`

## References
https://youtu.be/QseHOX-5nJQ