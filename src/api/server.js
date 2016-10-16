const restify = require('restify'),
  registerNoteRoutes = require('./routes/noteRoutes'),
  port = process.env.PORT || 3000;

const server = restify.createServer({
    name: 'Notes API'
});

registerNoteRoutes(server, require('./controllers/noteController'));

server.listen(port, () => {
    console.info('Server is running on port ' + port);
});
