import { Router } from 'express';
import VoltsRouter from './voltsRouter';
import GroundRouter from './groundRouter';
import GpioRouter from './gpioRouter';

class MasterRouter {
  private _router = Router();
  private _33volts = new VoltsRouter(3.3);
  private _5volts = new VoltsRouter(5);
  private _ground = GroundRouter;
  private _gpio0 = new GpioRouter(0, "", "");
  private _gpio1 = new GpioRouter(1, "EEPROM Serial Clock", "I2C");
  private _gpio2 = new GpioRouter(2, "Serial Data", "I2C");
  private _gpio3 = new GpioRouter(3, "Serial Data", "I2C");
  private _gpio4 = new GpioRouter(4, "", "");
  private _gpio5 = new GpioRouter(5, "", "");
  private _gpio6 = new GpioRouter(6, "", "");
  private _gpio7 = new GpioRouter(7, "Chip Enable-CE1", "SPI0");
  private _gpio8 = new GpioRouter(8, "Chip Enable-CE0", "SPI1");
  private _gpio9 = new GpioRouter(9, "MISO", "SPI1", "PWM");
  private _gpio10 = new GpioRouter(10, "MOSI", "SPI0");
  private _gpio11 = new GpioRouter(11, "SCLK", "SPI0");
  private _gpio12 = new GpioRouter(12, "", "PWM");
  private _gpio13 = new GpioRouter(13, "", "PWM");
  private _gpio14 = new GpioRouter(14, "", "UART TX");
  private _gpio15 = new GpioRouter(15, "", "UART RX");
  private _gpio16 = new GpioRouter(16, "Chip Enable-CE2", "SPI1");
  private _gpio17 = new GpioRouter(17, "Chip Enable-CE1", "SPI1");
  private _gpio18 = new GpioRouter(18, "Chip Enable-CE0", "SPI1", "PWM");
  private _gpio19 = new GpioRouter(19, "MISO", "SPI1", "PWM");
  private _gpio20 = new GpioRouter(20, "MISO", "SPI1");
  private _gpio21 = new GpioRouter(21, "SCLK", "SPI1");
  private _gpio22 = new GpioRouter(22, "", "");
  private _gpio23 = new GpioRouter(23, "", "");
  private _gpio24 = new GpioRouter(24, "", "");
  private _gpio25 = new GpioRouter(25, "", "");
  private _gpio26 = new GpioRouter(26, "", "");
  private _gpio27 = new GpioRouter(27, "", "");
  
  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use('/1', this._33volts.router);
    this._router.use('/2', this._5volts.router);
    this._router.use('/3', this._gpio2.router);
    this._router.use('/4', this._5volts.router);
    this._router.use('/5', this._gpio3.router);
    this._router.use('/6', this._ground);
    this._router.use('/7', this._gpio4.router);
    this._router.use('/8', this._gpio14.router);
    this._router.use('/9', this._ground);
    this._router.use('/10', this._gpio15.router);
    this._router.use('/11', this._gpio17.router);
    this._router.use('/12', this._gpio18.router);
    this._router.use('/13', this._gpio27.router);
    this._router.use('/14', this._ground);
    this._router.use('/15', this._gpio22.router);
    this._router.use('/16', this._gpio23.router);
    this._router.use('/17', this._33volts.router);
    this._router.use('/18', this._gpio24.router);
    this._router.use('/19', this._gpio10.router);
    this._router.use('/20', this._ground);
    this._router.use('/21', this._gpio9.router);
    this._router.use('/22', this._gpio25.router);
    this._router.use('/23', this._gpio11.router);
    this._router.use('/24', this._gpio8.router);
    this._router.use('/25', this._ground);
    this._router.use('/26', this._gpio7.router);
    this._router.use('/27', this._gpio0.router);
    this._router.use('/28', this._gpio1.router);
    this._router.use('/29', this._gpio5.router);
    this._router.use('/30', this._ground);
    this._router.use('/31', this._gpio6.router);
    this._router.use('/32', this._gpio12.router);
    this._router.use('/33', this._gpio13.router);
    this._router.use('/34', this._ground);
    this._router.use('/35', this._gpio19.router);
    this._router.use('/36', this._gpio16.router);
    this._router.use('/37', this._gpio26.router);
    this._router.use('/38', this._gpio20.router);
    this._router.use('/39', this._ground);
    this._router.use('/40', this._gpio21.router);
  }
}

export = new MasterRouter().router;
