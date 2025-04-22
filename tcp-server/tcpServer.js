const net = require('net');
require('dotenv').config({ path: '../.env' });



const server = net.createServer((socket) => {
    socket.on('data', (data) => {
        console.log("Value received: ",data.toString());
    })

    console.log('client connected');
    socket.on('end', () => {
        console.log('client disconnected');
    });

    socket.on('error', (err) => {
        console.log("error: ", err);
    })


    socket.write('Welcome to the TCP Server');


})


server.listen(process.env.PORT_TCP, '127.0.0.1', () => {
    console.log('TCP SERVER ON PORT: ', process.env.PORT_TCP)
})

module.exports = server;
