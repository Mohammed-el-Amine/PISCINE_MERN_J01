const { render } = require('ejs');
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4242;

var myMERN_module = require('./myMERN_module.js');

// Set EJS as templating engine 
app.set('view engine', 'ejs');

// app.get('/name/:name/:content', function (req, res, next) {
//     console.log(req);
// });

app.get('/files/:name', function (req, res, next) {
    const name =req.params.name;
    const data = myMERN_module.read(name);
    render("hello",{text: data,name: name});
});

app.post('/files/:name', function (req, res, next) {
    const name =req.params.name;
    myMERN_module.create(name);
});

app.put('/files/:name/:content', function (req, res, next) {
    const name =req.params.name;
    const content =req.params.content;
    myMERN_module.update(name,content);
});

app.delete('/files/:name', function (req, res, next) {
    const name =req.params.name;
    myMERN_module.delete(name);
});

//config message + port
app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
