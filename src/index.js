const restify = require('restify');

const server = restify.createServer({
    name: 'ms-api',
    version: '1.0.0'
});

server.get('/hello', (req, resp, next) => {
    resp.json({message: 'Hello'});
    console.log('Excuting /hello route!');
    return next();
});


server.listen(3000, () => {
    console.log('ms-api started on 3000');
})