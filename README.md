Debug Live
=====================

This little tool lets you debug your running node.js applications without setting breakpoints!


### Installation

```shell
npm install debug-live
```

### Usage

```javascript
//require debug-live
var debugLive = require("debug-live");

//paste in this snippet of code
debugLive(function (exprToEval) {
  return eval(exprToEval);
});

//let your app do what it needs to do
var counter = 0;

setInterval(function() {
  counter++;
},100);

var a = {
  a : "abc",
  b : "def"
};
```

Start your app, telnet to Debug Live, and look at that `counter` go!
```bash
$ telnet localhost 1337
Trying 127.0.0.1...
Connected to localhost.
Escape character is '^]'.
Welcome to the Live Debugger:
>counter
36
>counter
51
>counter
70
>a
[object Object]
>a.a
abc
>a.b
def
>a.b.c
undefined
>a.doesntExist.a
TypeError: Cannot read property 'a' of undefined
>a
[object Object]
>JSON.stringify(a, null, "\t")
{
	"a": "abc",
	"b": "def"
}
>
```

### Other

You can optionally pass the `port` (default 1337) for Debug Live as a second parameter:

```javascript
debugLive(function (exprToEval) {
  return eval(exprToEval);
},6006);
```
