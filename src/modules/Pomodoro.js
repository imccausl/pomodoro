import TimerModel from './TimerModel';
import Timer from './Timer';

export default (timerConfig) => {
  const model = TimerModel(timerConfig);
  const timer = Timer;
  return {
    start(callback) {
      timer(model, callback);
    },
  };
};
