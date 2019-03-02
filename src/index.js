const app = require('./app'),
      mongoose = require('mongoose'),
      environment = require('./environment');

// app.listen(environment.PORT);
// console.log('Application started');

mongoose.connect(environment.MONGO, { useNewUrlParser: true })
    .then(() => {
        app.listen(environment.PORT);
        console.log('Application started')
    })
    .catch((error) => {
        console.log('Error starting application', error);
    })

module.exports = app;