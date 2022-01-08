import { NextFunction, Request, Response, Router } from 'express';
import voltsController from '../controllers/voltsController';

class VoltsRouter {
  private _router = Router();
  private _controller = voltsController;
  private _voltage : number = 0;

  get router() {
    return this._router;
  }

  constructor(voltage : number) {
    this._configure();
    this._voltage = voltage;
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.data(this._voltage));
    });
  }
}

export = VoltsRouter;
