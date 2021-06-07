const express = require('express');
const app = express();

require('dotenv').config()


app
  .get('/basketball', (req, res) => {
    res.send('Basketball service');
  })

  app.listen(`${process.env.BASKETBALL_API_PORT}`, (error) => {
    if (error) {
      return console.log(
        `Error happened while starting the app on port ${process.env.BASKETBALL_API_PORT} `,
        error
      );
    }
    console.log(`Basketball service successfully started on port ${process.env.BASKETBALL_API_PORT}`);
  });