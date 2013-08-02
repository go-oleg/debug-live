var net = require('net');

module.exports = function(evalFunc,port) {
	port = port || 1337;

	var server = net.createServer(function (socket) {
		socket.write("Welcome to the Live Debugger:\n>");

		socket.on("data", function(data) {
			var result = "";

			try {
				result = evalFunc(data.toString());
			}
			catch(e) {
				result = e;
			}
			finally {
				socket.write(result  + "\n>");
			}
		});
	});

	server.listen(port, '127.0.0.1');
}
