var net = require('net');

module.exports = function(evalFunc,port) {
	if(!port) {
		throw new Error("Please specify the `port` as the second parameter to Debug Live.");
	}

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
	console.log("Debug Live is running on port " + port + ". `telnet localhost " + port + "` to connect.");
}
