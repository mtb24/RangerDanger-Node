// Start sails and pass it command line arguments
var app = require('sails');
app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  return next();
});
app.lift(require('optimist').argv);

var io = require('socket.io').listen(app, {origins: '*:*', log: false});
