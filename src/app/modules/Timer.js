
function Timer(model, callback) {
  const timer = setInterval(() => {
    model.updateMinutes().updateSeconds().checkStatus();

    if (model.state.finished) {
      callback('Pomodoro Finished!');
      clearInterval(timer);
    } else {
      callback(`${model.state.minutes} min ${model.state.seconds} sec remaining ${(!model.state.onBreak) ? 'in Pomodoro' : 'in Break'}`);
    }
  }, 1000);

  return timer;
}

export function stopTimer(timer, callback) {
  clearInterval(timer);
  callback();
}

export default Timer;
