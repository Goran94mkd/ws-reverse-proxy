const express = require('express');
const proxy = require('express-http-proxy');

const app = express();

require('dotenv').config()

app.use('/football', proxy(
  `http://localhost:${process.env.FOOTBALL_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.FOOTBALL_API_PORT}/football${req.url}`
    }
  }
));

app.use('/basketball', proxy(
  `http://localhost:${process.env.BASKETBALL_API_PORT}`,
  {
    proxyReqPathResolver: (req) => {
      return `http://localhost:${process.env.BASKETBALL_API_PORT}/basketball${req.url}`
    }
  }
));

const PORT = process.env.PORT || process.env.PROXY_SERVICE_PORT;
app.listen(PORT, err => {
  if(err) {
      return console.log('Could not start proxy service', err);
  }
  console.log(`Proxy service successfully started on port ${PORT}`);
});

