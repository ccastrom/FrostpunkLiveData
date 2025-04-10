local socket = require("socket")


local client = socket.connect("127.0.0.1", 4000)


if client then
    print("Connection success")

    
    cliente:send("1\n")

   
    cliente:close()
else
    print("Cannot connect to the TCP server")
end