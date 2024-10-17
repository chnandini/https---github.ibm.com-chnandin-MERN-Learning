const EvenEmitter = require("events");

const http = require('http');

// const myEmitter = new EvenEmitter();

class Sales extends EvenEmitter {
    constructor() {
        super()
    }
}

const myEmitter = new Sales()

myEmitter.on("newSale",() => {
    console.log("There was a new sale new");
});

myEmitter.on("newSale",() => {
    console.log("Customer name : Nandini");
});

myEmitter.on("newSale",stock => {
    console.log(`There are now ${stock} items`);
});

myEmitter.emit("newSale",9);


////////////////////////////////////// Creating a server //////////////////

const server = http.createServer();

server.on('request', (req,res) => {
    console.log('Request received');
    console.log(req.url);
    res.end('Request received');
});

server.on('request', (req,res) => {
    
    console.log('Another request!');
});

server.on('close', (req,res) => {
    console.log('Server closed');
});

server.listen(8000, "127.0.0.1", () => {
    console.log("Waiting for requests..........");
});