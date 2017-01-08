'use strict';

var promise = new Promise(function(fulfill, reject) {
    // Your solution here
    setTimeout(() =>

        fulfill("FULFILLED!"), 300);
});

promise.then(console.log);
