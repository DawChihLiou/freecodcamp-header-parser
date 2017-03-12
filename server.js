const express = require('express');

const app = express();

app.use(express.static(__dirname + '/dist'));

/**
 * Render landing page 
 */
app.get('/', function(req, res) {
    res.render(__dirname + '/index.html');
});

/**
 * Get Client information including IP address, language, and operating system.
 * 
 * References:
 *  1. http://stackoverflow.com/questions/8107856/how-to-determine-a-users-ip-address-in-node
 *  2. https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
 *  3. http://stackoverflow.com/questions/1326928/how-can-i-get-client-infomation-such-as-os-and-browser
 */
app.get('/api/userinfo', function(req, res) {
    const ipaddress = req.get('x-forwarded-for');
    const language = req.get('accept-language').match(/[a-z]{2}-[A-Z]{2}/g)[0];
    const software = req.get('user-agent').match(/\([\w\d\s]+;[\w\d\s]+\)/g)[0].replace(/[\(\)]/g, '');
    const result = {ipaddress, language, software};
    
    res.send(result)
});

app.listen(8080, function() {
   console.log('Server is listening port 8080'); 
});