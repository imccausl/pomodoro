import Timer from './Timer';

export default (timerConfig) => {
  const timer = Timer(timerConfig);
  let interval = null;

  return {
    start(callback) {
      interval = setInterval(() => {
        timer.updateMinutes().updateSeconds().checkStatus();

        if (timer.state.finished) {
          callback('Pomodoro Finished!');
          clearInterval(interval);
        } else {
          callback(`${timer.state.minutes} min ${timer.state.seconds} sec remaining ${(!timer.state.onBreak) ? 'in Pomodoro' : 'in Break'}`);

        }
      }, 1000);
    },
  };
};
