function create(name) {
    var fs = require('fs');
    fs.open(`${name}`, 'w', function (err,
        file) {
        if (err) throw console.log(`Create ${name} : KO`);
        console.log(`Create ${name} : OK`);
    });
};

//create("hoho"); fonctionne correctement