function create(name){
    const fs = require('fs');
    fs.open(`${name}`, 'w', function (err,file) {
        if (err) throw console.error(`Create ${name} : KO`);
        console.log(`Create ${name} : OK`);
    });
};

function read(name){
    const fs = require('fs')
    fs.readFile(`${name}`, 'utf8' , (err, data) => {
        if (err) {
        console.error(`Read ${name} : KO`);
        return
        }
        console.log(data)
    })
};

function update(name, content){
    var fs = require('fs');
    fs.writeFile(`${name}`, `${content}`, function (err) {
    if (err) throw console.error(`Update ${name} : KO`);
    console.log(`Update ${name} : OK`);
    });
};

function deleted(name){
    var fs = require('fs');
    fs.unlink(`${name}`, function (err) {
    if (err) throw console.error(`Delete ${name} : KO`);
    console.log(`Delete ${name} : OK`);
    });
};


//create("hoho"); //fonctionne correctement
//read("hoho");  // fonctionne correctement
//update("ho","je suis le remplacement");  // fonctionne correctement
//deleted("hoho"); // fonctionne correctement