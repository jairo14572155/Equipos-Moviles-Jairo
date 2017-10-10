//invoca botbuilder requiriendo el paquete
var builder = require('botbuilder');
//hace lo mismo con el conector, une la consola con el bot 
var connector = new builder.ConsoleConnector().listen();
//instancia de un bot tipo universal
var bot = new builder.UniversalBot(connector);

//primer dialogo raiz, se crea dentro del bot
bot.dialog('/',[//primer dialogo o dialogo raiz, se crea dentro del bot
    function(session){//objeto llamado session
        builder.Prompts.text(session, '¿Como te llamas?'); //Enviar
    },
    function(session, results){
        let msj = results.response;
        //session.send('Me dijiste: '+msj);
        session.send(`Hola ${msj}`);
    }
    
])