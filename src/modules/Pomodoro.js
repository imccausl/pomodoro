import TimerModel from './TimerModel';
import Timer, { stopTimer } from './Timer';

export default (timerConfig) => {
  const model = TimerModel(timerConfig);
  const makeTimer = Timer;
  let timer = null;

  return {
    start(callback) {
      timer = makeTimer(model, callback);
    },
    pause() {
      stopTimer(timer, ()=>console.log('Timer Paused'));
    }
  };
};
