/*Some invalid JSON will be available on process.argv[2].
* Build a function called `parsePromised` that creates a promise,performs `JSON.parse` in a `try`/`catch` block, and fulfills or rejectsthe promise depending on whether an error is thrown.**Note:** your function should synchronously return the promise!
* Build a sequence of steps like the ones shown above that catchesany thrown errors and logs them to the console.
*/
'use strict'

function parsePromised(json) {
    return new Promise(function (fulfill, reject) {
        try {
            fulfill(JSON.parse(json));
        } catch (err) {
            reject(err);
        }
    });
}

function onReject(err) {
    console.log(err.message);
}

parsePromised(process.argv[2]).then(null, onReject);