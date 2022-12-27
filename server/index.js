const liveServer = require('live-server');

const params = {
  host:'localhost',
  port: 5500,
  open: false,
  root: './client',
};

liveServer.start(params);