var findPosionedDuration = function (timeSeries, duration) {
  let maxPoisonTime = 0;

  for (let i = 0; i < timeSeries.length; i++) {
    if (i + 1 >= timeSeries.length) {
      maxPoisonTime += duration;
    } else {
      // the maximum amount of time a poison can last is the duration
      // so if the time between the next attack is (greater) > than the duration
      // we select the duration otherwise it would be less than the duration so we select the min
      // This is true until the end of the time series where there is no more attacks
      // and can safely conclude the poison will last its duration
      maxPoisonTime += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
    }
  }

  return maxPoisonTime;
};
