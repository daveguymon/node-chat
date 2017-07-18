const express = require('express');
const bodyParser = require('body-parser');
const messages = require(__dirname+'/controllers/messages_controller');

const app = express();
app.use( bodyParser.json() );
app.use(express.static(__dirname+'/../public/build'));

const messagesBaseUrl = "/api/messages/";
app.post( messagesBaseUrl, messages.create );
app.get( messagesBaseUrl, messages.read );
app.put( `${messagesBaseUrl}:id`, messages.update );
app.delete( `${messagesBaseUrl}:id`, messages.delete );

const port = 3000;
app.listen(port, ()=> { console.log(`Server listening on port ${port}`); } );
