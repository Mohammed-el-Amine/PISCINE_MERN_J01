const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;

// sendFile will go here
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
