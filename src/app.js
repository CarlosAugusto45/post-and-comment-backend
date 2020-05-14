import express from 'express';
import cors from 'cors';

import './database';
import Routes from './routes';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());
    this.server.use(express.json());
  }

  routes() {
    this.server.use(Routes);
  }
}

export default new App().server;
