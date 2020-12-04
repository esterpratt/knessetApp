const express = require('express');
const { router: getKnessetsRouter } = require('./routes/getKnessetRoute');

const app = express();

app.use(getKnessetsRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
