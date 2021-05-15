import socketio from 'socket.io-client';

const socket = socketio.connect('http://localhost:4000');

(() => {
    socket.emit('init', { name: 'bella' });
  
    socket.on('welcome', (msg) => {
      console.log(msg);
    });
    
})();
