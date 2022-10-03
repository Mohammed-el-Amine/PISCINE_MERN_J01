const express = require('express');
const app = express();
const port = process.env.PORT || 4242;

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});
