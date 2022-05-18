const socket = io.connect();

const sendButton = document.getElementById('send-button');
const chatOutput = document.getElementById('chat-output');
const usernameInput = document.getElementById('username-input')
const messageInput = document.getElementById('message-input');

sendButton.addEventListener('click', () => {
    console.log('clicked');
    socket.emit('chatData', {
        message: messageInput.value,
        sender: usernameInput.value
    });
});

socket.on('chatData', (data) => {
    chatOutput.innerHTML += `<p><strong>${data.sender}: </strong>${data.message}</p>`
});