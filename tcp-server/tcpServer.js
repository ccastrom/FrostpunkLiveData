const net= require('net');
require('dotenv').config({path:'../.env'});



const server= net.createServer((socket)=>{
    socket.on('data',(data)=>{
        const received=data.toString();
        console.log("Value received: ",received );
    })

    console.log('client connected');
    socket.on('end', () => {
    console.log('client disconnected');
  });

  socket.write('hello\r\n');
  socket.pipe(socket);


})


server.on('error',(err)=>{
    throw err;
})

server.listen(process.env.PORT_TCP,'127.0.0.1',()=>{
    console.log('TCP SERVER ON PORT: ',process.env.PORT_TCP)
})
