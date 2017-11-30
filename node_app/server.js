var http = require('http');

function start() {

    http.createServer(function (req, res) {

    }).listen('3000');

    console.log('Сервер успешно запущен. Порт для входящих запросов - 3000');

}

exports.start = start;