import express from 'express';
import log from './util/logger';
import setupRoute from './route';

const app = express();
const port = process.env.port || 3000;

app.use(express.json({ limit: '50mb' }));

setupRoute({ app });

app.listen(port, () => {
  log.info('app', `app listening on port ${port}`);
});
