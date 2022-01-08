import dotenv from 'dotenv';
import express, { Request, Response, NextFunction } from 'express';
import MasterRouter from './routers/MasterRouter';
import ErrorHandler from './models/ErrorHandler';

dotenv.config({
  path: '.env'
});

class Server {
  public app = express();
  public router = MasterRouter;
}

const server = new Server();

server.app.use('/api/v1', server.router);

server.app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  });
});

((port = process.env.APP_PORT || 5000) => {
  server.app.listen(port, () => console.log(`> Listening on port ${port}`));
})();