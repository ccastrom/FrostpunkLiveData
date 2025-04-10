var express = require('express');
const {createServer}= require('node:http')
var cors = require('express');
const path = require('path');
const { Server } = require('socket.io');

class ServerIO {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.server=createServer(this.app);
        this.io = new Server(this.server);
        //this.routeEndpoint='/myEndpoint!';
        this.middlewares();
        this.routes();


    }
    routes() {

        this.app.get('/', (req, res) => {
            res.render('index.ejs')
        })

       
          

        //this.app.use( this.routeEndpoint,require('../routes/routeEndpoint.routes'))

    }
    middlewares() {
        this.app.use(express.static('public'));
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.set('view engine', 'ejs');
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }))
    }

    startServer() {

        this.server.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })

        this.io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
              console.log('user disconnected');
            });
          });

        
    
    }



}

module.exports = ServerIO;
