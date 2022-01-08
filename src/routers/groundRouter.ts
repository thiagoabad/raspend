import { NextFunction, Request, Response, Router } from 'express';
import GroundController from '../controllers/groundController';

class ThemeARouter {
  private _router = Router();
  private _controller = GroundController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json(this._controller.data());
    });
  }
}

export = new ThemeARouter().router;