import Piano from "./piano";
import PianoQueue from './piano_queue';

document.addEventListener('DOMContentLoaded',() => {
  const pianoQueue = new PianoQueue();
  pianoQueue.render();

  const pianoComponent = () => {
    const element = document.createElement('div');
    element.classList.add("keyboard-section");
    element.appendChild(Piano(pianoQueue));
    return element;
}

document.body.appendChild(pianoComponent());
});
