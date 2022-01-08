import ErrorHandler from '../models/ErrorHandler';

class GpioController {
  data(port:number, surname:string, nickname:string, extra:string="") {
    let name:string = `GPIO ${port}`
    if (surname) {
      name += ` ${surname}`
    }
    if (nickname) {
      name += ` (${nickname})`
    }
    if (extra) {
      name += ` [${extra}]`
    }
    return {
      name,
    };
  }
}

export = new GpioController();
