var port = process.env.PORT || 8000;
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/cats/'));
app.listen(port, function () {
    console.log('Server started at port ' + port);
});