//require debug-live
var debugLive = require("debug-live");

//paste in this snippet of code
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
