local socket = require("socket");


local client = socket.connect("127.0.0.1", 4000)


if client then
    print("Connection success")

    socket.sleep(1)
    client:send("1")

    client:close()

   
    
else
    print("Cannot connect to the TCP server")
end