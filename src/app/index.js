import Pomodoro from './modules/Pomodoro';

const pomodoro = Pomodoro({ pomodoroLength: 1, breakLength: 1 });

pomodoro.start(console.log);

setTimeout(() => {
  pomodoro.pause();
}, 2000);

setTimeout(() => {
  pomodoro.start(console.log);
}, 3000);
