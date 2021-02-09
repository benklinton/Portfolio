var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`)
});

app.use(express.json());

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
});