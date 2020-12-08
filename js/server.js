var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'images/products/' });
var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var database = 'pulsedb';
var directory = require('path').resolve(__dirname, '..');
var app = express();
app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true
	})
);
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-Width, Content-Type, Accept, content-type, application/json'
	);
	next();
});
app.use(express.static(directory));

app.post('/index/', function(req, res) {
	// console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		db.db(database).collection('index').deleteMany({}, function(err, res) {
			if (err) throw err;
			console.log('Deleted data in MongoDB.');
		});
		db.db(database).collection('index').insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log('Saved data in MongoDB.');
			db.close();
		});
		res.send('Your data is now saved in the MongoDB.');
	});
});

app.post('/products/', upload.array('image', 5), function(req, res) {
	// console.log(req.file);
	// var filePath = '/images/products/' + req.file.originalname;
	// fs.rename(req.file.path, __dirname + filePath, function(err) {
	// 	if (err) throw err;
	// });
	// req.body.image = filePath;
	console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		db.db(database).collection('products').deleteMany({}, function(err, res) {
			if (err) throw err;
			console.log('Deleted data in MongoDB.');
		});
		db.db(database).collection('products').insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log('Saved data in MongoDB.');
			db.close();
		});
		res.send('Your data is now saved in the MongoDB.');
	});
});

app.post('/faq/', function(req, res) {
	// console.log(req.body);
	MongoClient.connect(url, function(err, db) {
		db.db(database).collection('faq').deleteMany({}, function(err, res) {
			if (err) throw err;
			console.log('Deleted data in MongoDB.');
		});
		db.db(database).collection('faq').insertOne(req.body, function(err, res) {
			if (err) throw err;
			console.log('Saved data in MongoDB.');
		});
		db.close();
		res.send('Your data is now saved in the MongoDB.');
	});
});
app.get('/index-data/', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.db(database).collection('index').findOne({}, function(err, result) {
			if (err) throw err;
			// console.log(result);
			res.json(result);
			db.close();
		});
	});
});
app.get('/products-data/', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.db(database).collection('products').findOne({}, function(err, result) {
			if (err) throw err;
			// console.log(result);
			res.json(result);
			db.close();
		});
	});
});
app.get('/faq-data/', function(req, res) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err;
		db.db(database).collection('faq').findOne({}, function(err, result) {
			if (err) throw err;
			// console.log(result);
			res.json(result);
			db.close();
		});
	});
});
app.listen('8080');
