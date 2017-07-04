function setTimer(timerConfig = { pomodoroLength: 25, breakLength: 5 }, onBreak = false) {
  const breakLength = timerConfig.breakLength;
  const pomodoroLength = timerConfig.pomodoroLength;
  const minutes = !onBreak ? pomodoroLength : breakLength;

  return {
    minutes,
    seconds: 0,
    onBreak,
    finished: false,
    timerConfig,
  };
}

function Timer(timerConfig) {
  return {
    state: setTimer(timerConfig),
    checkStatus() {
      if (this.state.minutes === 0 && this.state.seconds === 0) {
        if (this.state.onBreak) {
          this.state.finished = true;
        } else {
          this.state = setTimer(this.state.timerConfig, true);
        }
      }

      return this;
    },

    updateSeconds() {
      if (this.state.seconds === 0) {
        this.state.seconds = 59;
      } else if (this.state.seconds > 0) {
        this.state.seconds -= 1;
      }

      return this;
    },

    updateMinutes() {
      if (this.state.minutes > 0 && this.state.seconds === 0) {
        this.state.minutes -= 1;
      }

      return this;
    },
  };
};

export default Timer;

