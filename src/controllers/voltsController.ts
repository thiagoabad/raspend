class VoltsController {
    data(voltage : number) {
      return {
        name: `${voltage}v`
      };
    }
  }
  
  export = new VoltsController();