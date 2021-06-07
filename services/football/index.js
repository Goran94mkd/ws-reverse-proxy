const express = require('express');
const app = express();

require('dotenv').config()


app
  .get('/football', (req, res) => {
    res.send('Football service');
  })

  app.listen(`${process.env.FOOTBALL_API_PORT}`, (error) => {
    if (error) {
      return console.log(
        `Error happened while starting the app on port ${process.env.FOOTBALL_API_PORT} `,
        error
      );
    }
    console.log(`Football service successfully started on port ${process.env.FOOTBALL_API_PORT}`);
  });