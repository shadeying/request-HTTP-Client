var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         console.log(err.statusCode + " " + err.statusMessage);
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode);
         console.log('Response Status Message: ', response.statusMessage);
         console.log('Content Type: ', response.headers['content-type']);
         console.log('Downloading image...');
       })
       .on('end', function(){
          console.log('Download complete.');
       })
       .pipe(fs.createWriteStream('./future.jpg'));
