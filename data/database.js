'use strict';

var mongoose = require('mongoose');

var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

var mongoUri ='mongodb://mcondit04:eagles04@ds127938.mlab.com:27938/ngchat';

mongoose.connect(mongoUri, function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
