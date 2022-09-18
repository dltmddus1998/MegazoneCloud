import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config/config.js';
import { dbConnected } from './db/database.js';
import enterpriseRouter from './routes/enterprise.route.js';
import adminRouter from './routes/admin.route.js';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
app.use(helmet());
app.use(morgan('tiny'));

app.use('/api/users', adminRouter);
app.use('/api/enterprises', enterpriseRouter);

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
  dbConnected();
});
