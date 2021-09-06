require('dotenv').config()

const express = require('express');

const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(port, () => console.log(`Server ready on ${port}`));
