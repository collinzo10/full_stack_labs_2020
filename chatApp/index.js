const path = require('path');
const express = require('express');
const socket = require('socket.io'); //server side or backend socket
const mongoose = require('mongoose');
//App setup
const app = express();
const Connection = require('./models/Connection');
const Message = require('./models/Message');
const RoomLog = require('./models/RoomLog.js');

const server = app.listen(4000, () => {
	console.log('listening to port 4000..');
});

mongoose.connect('mongodb+srv://admin:admin@cluster0-cvvpp.mongodb.net/Communication?retryWrites=true&w=majority', {
	useUnifiedTopology: true,
	useNewUrlParser: true,
	useFindAndModify: false
});
//test mongoose connection
const connection = mongoose.connection;
connection.once('open', (err,) => {
	console.log('MongoDB database connection established successfully');
});

//Body-Parser(midware) extracts the entire body portion of an
//incoming request stream and exposes it on req.body.
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//static files i.e css,html
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.get('/', (req, res) => {
	res.render('index');
});

//socket setup
var io = socket(server); //socket will be sitting now waiting for connection

//get all msgs frm a a room
app.post('/app/messages', (req, res) => {
	Message.find({ room: req.body.roomname }, (err, data) => {
		if (err) console.log(err);
		else {
			res.setHeader('Content-type', 'application/json');
			res.status(200).end(JSON.stringify(data));
		}
	});
});

//listen for connection
io.on('connection', (socket) => {
	//fxn is called immediately der is a connectn
	//when a client connects,u get the connectn mth,
	//d fxn runs passing the socket obj
	console.log('made socket connection', socket.id);

	//recieves the emited 'chat' msg from chat.js(frm 1 client)
	socket.on('chat', (data) => {
		//send it to all the connected sockets/clients including sender
		io.sockets.emit('chat', data);
	});

	//recieving the typing msg from index.js
	socket.on('typing', (data) => {
		//broadcasting msg to all client but for sender
		socket.broadcast.emit('typing', data);
	});

	//inform existing users about new user
	setInterval(function() {
		socket.emit('joined_room', socket.id);
	}, 3000);
});
