# Explain why do we want sometimes to use setImmediate instead of using setTimeout?
setTimeout runs in Timer phase, setImmediate runs in check phase.
For example: If there's a case needs to run just before close phase, we can use setImmediate.

var fs = require('fs');
var path = require('path');

fs.readFile(path.join(__dirname, 'greet.txt'), 'utf8', function(err, data) {
    setTimeout(() => { console.log('timeout'); }, 0);
    setImmediate(() => { console.log('immediate'); });
    process.nextTick(() => console.log('nexttick'));
});

# Explain the difference between process.nextTick and setImmediate?
A function passed to process.nextTick() is going to be executed on the current iteration of the event loop, after the current operation ends. This means it will always execute before setTimeout and setImmediate.

A setTimeout() callback with a 0ms delay is very similar to setImmediate(). The execution order will depend on various factors, but they will be both run in the next iteration of the event loop.

# Name 10 global modules/methods available in Node environment.
Buffer
console
exports
global
module
process
require()
setImmediate()/clearImmediate()
setInterval()/clearInterval()
setTimeout()/clearTimeout()
URL

