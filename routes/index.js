

//expressの使用許可
var express = require('express');
var router = express.Router();

//コマンドラインを利用する為child_processの使用許可
var spawn = require('child_process').spawn;

//ホーム画面index.ejsの表示
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Ras Pi Stream' });
});

//ストリームボタンクリック時の処理
router.get('/stream', function (req, res) {
  console.log(req.query);
  var id = req.query.id;

var raspistill = spawn('raspistill', [ '-o', './public/images/raspi.jpg', '-h', '600', '-w', '960', '-tl', '100', '-t', '60000', '-n', '-q', '100']);

raspistill.stdout.on('data', function (data) {
  console.log('stdout(stream): ' + data);
});

raspistill.stderr.on('data', function (data) {
  console.log('stderr(stream): ' + data);
});

raspistill.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

});

//ストップボタンクリック時の処理
router.get('/stop', function (req, res) {
  console.log(req.query);
  var id = req.query.id;
  var raspistill = spawn('killall', ['raspistill']);

raspistill.stdout.on('data', function (data) {
  console.log('stdout(stop): ' + data);
});

raspistill.stderr.on('data', function (data) {
  console.log('stderr(stop): ' + data);
});

raspistill.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

});

router.get('/qrcode', function (req, res) {
  console.log(req.query);
  var id = req.query.id;

var zbar = spawn('bin/read-qr.rb');

zbar.stdout.on('data', function (data) {
  console.log('stdout(zbar): ' + data);
});

zbar.stderr.on('data', function (data) {
  console.log('stderr(zbar): ' + data);
});
zbar.on('close', function (code) {
  console.log('child process exited with code ' + code);
});

});

router.get('/qrcode_stop', function (req, res) {
  console.log(req.query);
  var id = req.query.id;

var zbar = spawn('killall', ['read-qr.rb']);

zbar.stdout.on('data', function (data) {
  console.log('stdout(zbar): ' + data);
});

zbar.stderr.on('data', function (data) {
  console.log('stderr(zbar): ' + data);
});

zbar.on('close', function (code) {
  console.log('child process exited with code ' + code);
});
});

router.get('/get_result', function (req, res) {
    var fs = require('fs');
    fs.readFile('./result.txt', 'utf8', function (err, text) {
        res.send(text);
    });
});


module.exports = router;
