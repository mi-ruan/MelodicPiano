import Piano from "./piano";
import PianoQueue from './piano_queue';
import * as Tone from "tone";


document.addEventListener('DOMContentLoaded',() => {
  const synth = new Tone.Synth({
      oscillator : {
      type : 'triangle16'
    },
    envelope : {
      attack : 1,
      decay : 0.3,
      sustain: 1,
      release: 1
    }
  }).toMaster();

  const pianoQueue = new PianoQueue(synth);
  pianoQueue.render();

  const piano = new Piano(pianoQueue, synth);

  const pianoComponent = () => {
    const element = document.createElement('div');
    element.classList.add("keyboard-section");
    element.appendChild(piano.render());
    return element;
  }
  document.body.appendChild(pianoComponent());
});
