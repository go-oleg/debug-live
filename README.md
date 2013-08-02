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
//(the second parameter is the configurable port Debug Live should run on)
debugLive(function (exprToEval) {
  return eval(exprToEval);
},1337);

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

Start your app, telnet to Debug Live, and look at that all those variables!
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

### Inspiration
The inspiration for Debug Live came from this [Stack Overflow question](http://stackoverflow.com/q/17974935/2359560).
