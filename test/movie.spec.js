const chai = require('chai'),
      expect = chai.expect,
      request = require('supertest'),
      MongodbMemoryServer = require('mongodb-memory-server').MongoMemoryServer,
      mongoInMemory = new MongodbMemoryServer(),
      mongoose = require('mongoose'),
      app = require('../src/app'),
      Movie = require('../src/model/movie');

    beforeEach(async () => {
        console.log('Executing beforeEach');
        const uri = await mongoInMemory.getConnectionString();
        await mongoose.connect(uri, {useMongoClient: true});
    });

    describe('Movie API Tests', async() => {
        it('Test Get', async (done) => {
            const movie = new Movie({name: 'Piratas do Caribe', genre: 'Aventura', year: 2003});
            const movieSaved = await movie.save();
            const response = await request(app).get('/movie/' + movieSaved.id);
            responseconsole.log('Rodou o test');
            done();
        })
    });



