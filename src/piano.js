import * as Tone from "tone";

var synth = new Tone.Synth().toMaster();

const MAXIMUM_KEYS = 24;

const SCALE = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
'A', 'A#', 'B'];

const Piano = () => {
  let keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  let keyz = document.createElement('div');
  keyz.classList.add('keys');
  for (let i = 0; i < MAXIMUM_KEYS; i++) {
    let key = document.createElement('div');
    let note = SCALE[i % 12] + (Math.floor(i / 12) + 3);
    let color = colorKeys(i%12);
    key.classList.add('key', `${note}`, `${color}`);
    key.addEventListener('click', () => {
      synth.triggerAttackRelease(`${note}`, "8n");
    });
    keyz.appendChild(key);
  }
  keyboard.append(keyz);
  return keyboard;
}

const colorKeys = (num) => {
  if (num === 1 || num === 3 || num === 6 || num === 8 || num === 10) {
    return "black";
  } else {
    return "white";
  }
}

export default Piano;
