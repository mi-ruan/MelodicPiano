import * as Tone from "tone";
import KeyboardKeys from "./keyboardkeys";
import PianoQueue from './piano_queue';
var synth = new Tone.Synth({
    oscillator : {
    type : 'triangle12'
  },
  envelope : {
    attack : 1,
    decay : 0.3,
    sustain: 1,
    release: 1
  }
}).toMaster();

const MAXIMUM_KEYS = 42;

const SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
'A', 'A#', 'B'];

const Piano = (pianoQueue) => {
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  let keyz = document.createElement('div');
  keyz.classList.add('keys');
  for (let i = 0; i < MAXIMUM_KEYS; i++) {
    let key = document.createElement('div');
    let note = SCALE[i % 12] + (Math.floor(i / 12) + 3);
    let color = colorKeys(i%12);
    key.classList.add('key', `${note}`, `${color}`);
    key.addEventListener('mousedown', () => {
      synth.triggerAttack(`${note}`);
      addNoteQueue(note, pianoQueue);
    });
    key.addEventListener('mouseup', () => {
      synth.triggerRelease();
    });
    const keyCode = KeyboardKeys(note);
    document.body.addEventListener('keydown', (e) => {
      if (e.keyCode === keyCode) {
        synth.triggerAttack(`${note}`);
        addNoteQueue(note, pianoQueue);
        key.id = 'active';
      };
    });
    document.body.addEventListener('keyup', (e) => {
      if (e.keyCode === keyCode) {
        synth.triggerRelease();
        key.id = '';
      };
    });
    let noteName = document.createTextNode(`${note}`);
    key.appendChild(noteName);
    keyz.appendChild(key);
  }
  keyboard.append(keyz);
  return keyboard;
}

const addNoteQueue = (note, pianoQueue) => {
  if(pianoQueue.recordFlag){
    pianoQueue.noteQueue.push(note);
  }
}

const colorKeys = (num) => {
  if (num === 1 || num === 3 || num === 6 || num === 8 || num === 10) {
    return "black";
  } else {
    return "white";
  }
}

export default Piano;
