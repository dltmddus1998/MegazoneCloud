import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config/config.js';
import { dbConnect } from './config/dbConfig.js';

const app = express();

app.use(express.json());
app.use(cors(config.cors));
app.use(helmet());
app.use(morgan('tiny'));

// app.use('/users');
// app.use('/enterprises');
// app.use('/services');
app.use('/', (req, res, next) => {
  res.send('API Server!!');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.sendStatus(500);
});

const port = config.port || 4000;

app.listen(port, () => {
  console.log(`🚀 SERVER started at ${port}`);
  dbConnect();
});
