const express = require('express');
const { router: getKnessetsRouter } = require('./routes/getKnessetRoute');

const app = express();

app.use(getKnessetsRouter);

app.listen(80, () => {
  console.log('Listening on port 80');
});
