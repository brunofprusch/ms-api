const environment = {
    PORT: process.env.PORT || 3000,
    MONGO: process.env.MONGODB_URI || 'mongodb://localhost:27017/ms-manager'
}

module.exports = environment;