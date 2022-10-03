const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;

// Set EJS as templating engine 
app.set('view engine', 'ejs');

//sendFile resend to name with user page
app.get('/name/:name', function (req, res, next) {
    const name = req.params.name ;
    const age = req.query.age;
    res.render('index',{text: name,text_1: age});
});
app.get('/name/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '/views/hello_unknow.html'));
});

//config message + port
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
