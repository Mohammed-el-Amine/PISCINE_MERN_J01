const express = require('express');
const app = express();
const port = process.env.PORT || 4242;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Great ! It works.');
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
