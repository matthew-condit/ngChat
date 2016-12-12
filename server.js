//Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const sockio = require('socket.io');

//Get routes
const api = require('./server/routes/index');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);

//Catch all other routes and return the index file

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || '3000';

app.set('port', port);

const server = http.createServer(app);

/*
**   Listen on provided port, on all network interfaces.
 */

server.listen(port, () => console.log(`API running on locahost:${port}`));
