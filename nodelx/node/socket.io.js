var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
io.on('connection', function() {
	console.log("有人访问")
});
server.listen(3000);
var ser=server.listen(3000,function(){
	console.log("listen"+ser.address().port+"...")
});
