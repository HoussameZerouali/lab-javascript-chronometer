class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(callback) {
    
    if(callback){
      this.intervalId = setInterval(() => {
        callback
        
      }, 1000);
    }else{
      this.intervalId = setInterval(() => {
        this.currentTime += 1
        
      }, 1000);
    }
    
  }
  
  

  getMinutes() {
    return Math.trunc(this.currentTime/60)
  }

  getSeconds() {
    return Math.trunc(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    if (value.toString().length < 2 ){
      let result = "0".concat(value);
      return result;     
    }else{
      return value.toString();
    }
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let minutes = this.computeTwoDigitNumber(this.getMinutes());
    let seconds = this.computeTwoDigitNumber(this.getSeconds());
    return `${minutes}:${seconds}`
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}
