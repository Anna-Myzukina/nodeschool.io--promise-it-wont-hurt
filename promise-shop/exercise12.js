/*Fetch JSON from [http://](http://) and console.log it.
There are several things you will want to know:
* `q-io`'s `http` module has a `read` method which returns a promise for thecontent of a successful (status 200) HTTP request.
* Parse the returned JSON and `console.log` it for much win
 */
var qhttp = require('q-io/http');

qhttp.read("http://localhost:1337")
.then(function(json) {
    console.log(JSON.parse(json));
})
.catch(console.error);