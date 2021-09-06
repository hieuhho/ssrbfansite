const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const countries = require("i18n-iso-countries");

const db = require('../db/index');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/fetch_country', (req, res) => {
  let mapData = {}
  db.Country.findAll()
    .then((locations) => {
      locations = JSON.parse(JSON.stringify(locations))
      for (var i in locations) {
        let alpha2Location = countries.numericToAlpha2(locations[i].location)
        if (alpha2Location) {
          mapData[alpha2Location] = locations[i].user_count
        }
      }
      res.status(200);
      res.send(mapData);
      res.end();
    })
    .catch((err) => {
      res.status(500);
      res.end(err);
    });
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => console.log(`Server ready on ${port}`));
