local socket = require("socket");


local client = socket.connect("127.0.0.1", 4000)

local count=0
if client then
    print("Connection success")

    while true do
        count=count+1
        socket.sleep(1.5)
        client:send(count)


    end

 

    --client:close()

   
    
else
    print("Cannot connect to the TCP server")
end