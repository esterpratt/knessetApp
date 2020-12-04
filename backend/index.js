import express from 'express';
import { getKnessetsRoute } from './routes/getKnessetRoute';

const app = express();

app.use(getKnessetsRoute);

app.listen(3000, () => {
  console.log('Listening on port 3000');
})