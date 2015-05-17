function Timer(timerSec){
  this.timerSeconds = timerSec;
  this.timerDivision = timerSec/1000;
  this.timeCounter = 1;
};

Timer.prototype.start = function(){
  this.intervalFunc = setInterval(function(){
    document.getElementById("interval").textContent = this.timeCounter;
    Timer.prototype.checkTimer.call(this);
  }.bind(this), 1000);
};

Timer.prototype.checkTimer = function(){
  if(this.timeCounter > this.timerDivision){
    document.getElementById("result").textContent = "You Lost";
    Timer.prototype.clearTimer.call(this);
  }
  ++this.timeCounter;
};

Timer.prototype.clearTimer = function(){
  this.timeCounter = 1;
  clearInterval(this.intervalFunc);
};
