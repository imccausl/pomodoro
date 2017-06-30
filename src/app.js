import Pomodoro from './modules/Pomodoro';

const pomodoro = Pomodoro({pomodoroLength: 1, breakLength: 1});

pomodoro.start(console.log);