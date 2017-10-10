var restify = require('restify');

var builder = require('botbuilder');



// Levantar restify

var server = restify.createServer();

server.listen(process.env.port || process.env.PORT || 3978, function () {

console.log('%s listening to %s', server.name, server.url); 

});



// No te preocupes por estas credenciales por ahora, luego las usaremos para conectar los canales.

var connector = new builder.ChatConnector({

appId: '',

appPassword: ''

});



// Ahora utilizamos un UniversalBot

var bot = new builder.UniversalBot(connector);

server.post('/api/messages', connector.listen());



bot.dialog('/',[

function(session,results,next){

if(!session.userData.nombre){//preguntar si sabemos el nombre

builder.Prompts.text(session, '¿ Como te llamas ?');

}



else{

next();//pasamos al siguiente metodo de la casacada llmada next()

}

},

function(session,results){

if(results.response){

let msj =results.response;

session.userData.nombre = msj;

}

session.send(`hola ${session.userData.nombre}!`);

}



]);


