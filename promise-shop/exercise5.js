/*First, create a promise using the Promise constructor.
In the promise’s executor, immediately fulfill the promise with a value of
'PROMISE VALUE'.
After the creation of the promise, pass console.log as the success handler to
the promise.
Finally, print out “MAIN PROGRAM” with console.log
 */

'use strict';
var promise = new Promise(function (fulfill, reject) {
fulfill('PROMISE VALUE');
});
promise.then(console.log);

console.log('MAIN PROGRAM');
