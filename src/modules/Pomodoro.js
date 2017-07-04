import Timer from './Timer';

export default (timerConfig) => {
  const timer = Timer(timerConfig);
  let interval = null;

  return {
    start(callback) {
      interval = setInterval(() => {
        timer.updateMinutes().updateSeconds().checkStatus();

        callback(`${timer.state.minutes} min ${timer.state.seconds} sec remaining ${(!timer.state.onBreak) ? 'in Pomodoro' : 'on Break'}`);

        if (timer.state.finished) {
          clearInterval(interval);
        }
      }, 1000);
    },
  };
};
