//Author Collins Mbuton and Akwasi Hamah

//Make connection
//frontend socket is diff from the backend socket,
//io is called here cuz we now hv the cdn in the html file
const socket = io.connect('http://localhost:4000');

let room_name = 'Home';

//join main chat by default
socket.emit('join', { room: room_name });

//get all the params from the html
//query DOM
let message = document.querySelector('#message'),
	handle = document.querySelector('#handle'),
	btn = document.querySelector('#send'),
	output = document.querySelector('#output'),
	feedback = document.querySelector('#feedback'),
	alertMsg = document.querySelector('#come_in'),
	room1 = document.querySelector('#room1'),
	room2 = document.querySelector('#room2'),
	room3 = document.querySelector('#room3');

//Emit event
btn.addEventListener('click', function(event) {
	if (message.value.length == ' ') {
		//checking for empty input values
		event.preventDefault();
	} else {
		//if click => send the msg to the server
		//1st params=> give it any name u wnt for the chat and
		//ensure u maintain when calling at the backend/server
		socket.emit('chat', {
			message: message.value,
			handle: handle.value
		});
		message.value = '';
		handle.value = '';
	}
});

message.addEventListener('keypress', () => {
	socket.emit('typing', handle.value);
});

//listen for events from the frontend
socket.on('chat', (data) => {
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});

socket.on('typing', (data) => {
	feedback.innerHTML = '<p><em>' + data + ', is typing a message...  </em></p>';
});

socket.on('joined_room', function(data) {
	alert(handle.value + ' connected');
});
