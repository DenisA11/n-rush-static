var port = process.env.PORT || 8000;
var express = require('express');
var app = express();

//Для соединения путей всегда следует использовать модуль path
//Потому что он позаботится о слешах (/ или \) в зависимости от платформы.
//В данном случае, код не запустится под Windows.
app.use(express.static(__dirname + '/cats/'));

app.listen(port, function () {
    console.log('Server started at port ' + port);
});

//За исключением path, это лучшая имплементация static server, которую только можно придумать.
//Соответствует духу node.js на 100%. Node.js любит простоту и модули (i.e. Express) с кучей звездочек на гит хаб.
