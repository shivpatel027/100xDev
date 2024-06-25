const express = require('express')
const bodyParser = require('body-parser');
const { log } = require('console');
const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.get('/back-end', (req, res) => {
  const message = req.body.message;
  console.log(message);

  res.json({
    output: "2 + 2 = 4"
  })
})

app.get('/', (req, res) => {
  console.log(req.body);
  res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`App is listening on the ${port}`);
});