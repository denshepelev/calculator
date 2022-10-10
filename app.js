//Hapi framework
const Hapi = require('hapi');

//Address and port
const host = 'localhost';
const port = 3000; 

//Create server
const server = Hapi.Server({
    host: host,
    port: port
});

//routes
require('./routes/routes')(server);

//Start server
const init = async () => {
    await server.start();
    console.log("Server started on port: " + port);
}

process.on('unhandledRejection',(err)=>{
    console.log(err);
    process.exit(1);    
})
//Start App
init();