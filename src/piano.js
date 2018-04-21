import KeyboardKeys from "./keyboardkeys";
import PianoQueue from './piano_queue';

const MAXIMUM_KEYS = 42;

const SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
'A', 'A#', 'B'];

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
      const note = SCALE[i % 12] + (Math.floor(i / 12) + 3);
      const color = this.colorKeys(i%12);
      key.classList.add(`${note}`, 'key', `${color}`);
      key.addEventListener('mousedown', () => {
        this.synth.triggerAttack(`${note}`);
        this.addNoteQueue(note, this.pianoQueue);
      });
      key.addEventListener('mouseup', () => {
        this.synth.triggerRelease();
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
        this.addNoteQueue(note, this.pianoQueue);
        key[0].id = 'active';
      }
    });
    document.body.addEventListener('keyup', (e) => {
      const note = KeyboardKeys(e.keyCode)
      if (note !== 'break'){
        const key = document.getElementsByClassName(`${note}`);
        this.synth.triggerRelease();
        key[0].id = '';
      }
    });
    return keyboard;
  }

  addNoteQueue(note, pianoQueue) {
    if(pianoQueue.recordFlag){
      pianoQueue.noteQueue.push(note);
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
