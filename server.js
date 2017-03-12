const express = require('express');

const app = express();

app.get('/', function(req, res) {
   // front page 
    res.send('Heck YAH!!');
});

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