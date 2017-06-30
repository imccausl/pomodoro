export default (timerConfig) => {
    const _state = {
        minutes: timerConfig.pomodoroLength || 25,
        seconds: 0,
        onBreak: false,
        timerFinished: false
    };
    
    const _config = timerConfig;

    let _timer = null;
        
    function _configurePomodoroTimer() {

    }

    function _configureBreakTimer(currState, config) {
        currState.onBreak = true;
        currState.minutes = config.breakLength || 5;
        currState.seconds = 0;
        currState.timerFinished = false;

        return currState;
    }

    function _updateTimer(currState) {
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
                currState = _configureBreakTimer(currState, _config);
            }
        }

        return currState;
    }

    return {
        start(callback) {
            let currTimerState = _state;

            _timer = setInterval(() => {
                currTimerState = _updateTimer(currTimerState);
                
                if (currTimerState.timerFinished) {
                    clearInterval(_timer);
                }

                callback(currTimerState);
            }, 1000);
        }
    };
}