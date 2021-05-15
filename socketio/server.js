// var app = express(); down add
app.io = require('socket.io')();

// module.exports = app; up add
app.io.on('connection', function(socket) {
	console.log('a user connected');
    
	socket.on('init', function(data) {
		console.log(data.name);
		socket.emit('welcome', `hello! ${data.name}`);
	});
    
});​
