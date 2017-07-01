export default (timerConfig) => {
  const state = {
    minutes: timerConfig.pomodoroLength || 25,
    seconds: 0,
    onBreak: false,
    timerFinished: false,
  };

  const globalConfig = timerConfig;

  let timer = null;

  function configurePomodoroTimer() {

    }

  function configureBreakTimer(currState, config) {
      currState.onBreak = true;
      currState.minutes = config.breakLength || 5;
      currState.seconds = 0;
      currState.timerFinished = false;

      return currState;
    }

  function updateTimer(currState) {
        // update timer countdown based on input and return updated state
    if (currState.seconds === 0 && currState.minutes > 0) {
      currState.seconds = 59;
      currState.minutes--;
    } else if (currState.seconds > 0) {
      currState.seconds--;
    } else if (currState.minutes === 0 && currState.seconds === 0) {
      if (currState.onBreak) {
        currState.timerFinished = true;
        } else {
          currState = _configureBreakTimer(currState, globalConfig);
        }
    }

    return currState;
  }

  return {
      start(callback) {
        let currTimerState = _state;

        timer = setInterval(() => {
          currTimerState = updateTimer(currTimerState);
          callback(currTimerState);

          if (currTimerState.timerFinished) {
            clearInterval(timer);
          }
        }, 1000);
      },
  };
};
