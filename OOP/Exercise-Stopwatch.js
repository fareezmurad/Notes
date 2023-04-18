function Stopwatch() {
  // Variable to calculate things in function scope
  let startTime = 0;
  let endTime = 0;
  let isRunning = false;

  const duration = () => {
    if (isRunning) {
      const getTime = new Date().getTime();
      return (getTime + endTime - startTime) / 1000;
    } else return (endTime - startTime) / 1000;
  };

  // To start the stopwatch using getTime() method for input to get unique current time in milliseconds
  this.start = () => {
    if (isRunning) throw new Error('Stopwatch is already started');
    else {
      isRunning = true;
      const getTime = new Date().getTime();
      startTime += getTime;
    }
  };

  // To stop the stopwatch using getTime() method for input to get unique current time in milliseconds
  this.stop = () => {
    if (!isRunning) throw new Error('Stopwatch is already stopped');
    else {
      isRunning = false;
      const getTime = new Date().getTime();
      endTime += getTime;
    }
  };

  // Initialize variable back to Initial value for reset button
  this.reset = () => {
    if (isRunning) this.stop();
    startTime = 0;
    endTime = 0;
  };

  // Make it variable accessible from outside scope(read-only). Cannot be overwritten.
  Object.defineProperty(this, 'duration', {
    get: () => {
      return duration();
    },
  });
}
