import Piano from "./piano";

const pianoComponent = () => {
  let element = document.createElement('div');
  element.classList.add("keyboard-section");
  element.appendChild(Piano());
  return element;
}

document.body.appendChild(pianoComponent());
