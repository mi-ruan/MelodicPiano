import KeyboardKeys from "./keyboardkeys";
import PianoQueue from './piano_queue';
import NOTES from './notes';

const MAXIMUM_KEYS = 42;

class Piano {
  constructor(pianoQueue, synth){
    this.pianoQueue = pianoQueue;
    this.synth = synth;
  }
  render() {
    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    const keyz = document.createElement('div');
    keyz.classList.add('keys');
    for (let i = 0; i < MAXIMUM_KEYS; i++) {
      const key = document.createElement('div');
      const note = NOTES[i % 12] + (Math.floor(i / 12) + 3);
      const color = this.colorKeys(i%12);
      key.classList.add(`${note}`, 'key', `${color}`);
      key.addEventListener('mousedown', () => {
        this.synth.triggerAttack(`${note}`);
        this.startTime = Date.now();
      });
      key.addEventListener('mouseup', () => {
        this.synth.triggerRelease();
        const duration = Date.now() - this.startTime;
        this.addNoteQueue(note, duration, this.startTime, this.pianoQueue);
      });
      let noteName = document.createTextNode(`${note}`);
      key.appendChild(noteName);
      keyz.appendChild(key);
    }
    keyboard.append(keyz);
    document.body.addEventListener('keydown', (e) => {
      const note = KeyboardKeys(e.keyCode);
      if (note !== 'break'){
        const key = document.getElementsByClassName(`${note}`);
        this.synth.triggerAttack(`${note}`);
        this.startTime = Date.now();
        key[0].id = 'active';
      }
    });
    document.body.addEventListener('keyup', (e) => {
      const note = KeyboardKeys(e.keyCode)
      if (note !== 'break'){
        const key = document.getElementsByClassName(`${note}`);
        this.synth.triggerRelease();
        const duration = Date.now() - this.startTime;
        this.addNoteQueue(note, duration, this.startTime, this.pianoQueue);
        key[0].id = '';
      }
    });
    return keyboard;
  }

  addNoteQueue(note, duration, time, pianoQueue) {
    if(pianoQueue.recordFlag){
      pianoQueue.noteQueue.push([note, duration, time]);
    }
  }
  colorKeys(num){
    if (num === 1 || num === 3 || num === 6 || num === 8 || num === 10) {
      return "black";
    } else {
      return "white";
    }
  }
}

export default Piano;
