import { NextFunction, Request, Response, Router } from 'express';
import GpioController from '../controllers/gpioController';

class GpioRouter {
  private _router = Router();
  private _controller = GpioController;
  private _portNumber : number;
  private _surname : string;
  private _nickname : string;
  private _extra : string;

  get router() {
    return this._router;
  }

  constructor(portNumber:number, surname:string, nickname:string, extra:string="") {
    this._configure();
    this._portNumber = portNumber;
    this._surname = surname;
    this._nickname = nickname;
    this._extra = extra;
  }

  private _configure() {
    this._router.get('/', (req: Request, res: Response, next: NextFunction) => {
      try {
        const result = this._controller.data(this._portNumber, this._surname, this._nickname, this._extra );
        res.status(200).json(result);
      }
      catch (error) {
        next(error);
      }
    });
  }
}

export = GpioRouter;