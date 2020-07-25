const express = require('express');
const app = express();
const port = 3050;
const path = require('path');

app.use(express.static(path.join(__dirname, '/../dist')));

app.get('/jobs/retrieve', (req, res) => {
  res.send('Hello World')
});

app.listen(port, () => console.log(`Listening at ${port}`));

module.exports = app;