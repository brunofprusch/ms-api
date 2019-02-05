const app = require('./app'),
      mongoose = require('mongoose');

app.listen(3000);
console.log('Application started');

// mongoose.connect('mongodb://localhost:27017/ms-manager', { useNewUrlParser: true })
//     .then(() => {
//         app.listen(3000);
//         console.log('Application started')
//     })
//     .catch((error) => {
//         console.log('Error starting application', error);
//     })


module.exports = app;