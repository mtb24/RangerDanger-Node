// Start sails and pass it command line arguments
var app = require('sails');
var io = require('socket.io').listen(app, {origins: '*:*', log: false});
app.lift(require('optimist').argv);
