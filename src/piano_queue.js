import Generator from './generator';

class PianoQueue {
  constructor(synth) {
    this.synth = synth;
    this.recordFlag = false;
    this.playbackFlag = false;
    this.noteQueue = [];
  }

  handleListener() {
    const button = document.querySelector('.piano-queue-button');
    button.addEventListener('click', () => {
      if (this.recordFlag === false && this.playbackFlag === false){
        this.recordFlag = true;
        button.removeChild(button.firstChild);
        const record_text = document.createTextNode('Press to Stop Listening');
        button.appendChild(record_text);
      } else if (this.recordFlag === true && this.playbackFlag === false) {
        this.recordFlag = false;
        this.playbackFlag = true;
        button.removeChild(button.firstChild);
        const reset_text = document.createTextNode('Reset Listener');
        button.appendChild(reset_text);
        this.play();
      } else if (this.recordFlag === false && this.playbackFlag === true) {
        this.playbackFlag = false;
        this.noteQueue = [];
        button.removeChild(button.firstChild);
        const button_text = document.createTextNode('Listen to Notes');
        button.appendChild(button_text);
      }
    });
  }

  play(){
    const generator = new Generator(this.noteQueue);
    let lastElement = this.noteQueue[this.noteQueue.length -1]
    this.noteQueue.push(generator.run(lastElement));
    let node = this.noteQueue.shift();
    var interval = this.noteQueue[0][2] - node[2];
    const playMusic = setInterval(() => {
      this.playNote(node);
      if (this.noteQueue.length === 0 || this.playbackFlag === false) {
        clearInterval(playMusic);
      } else {
        lastElement = this.noteQueue[this.noteQueue.length - 1]
        this.noteQueue.push(generator.run(lastElement))
        node = this.noteQueue.shift();
      }
    }, interval);
  }

  playNote(node){
    this.synth.triggerAttackRelease(node[0], `${node[1]/1000}`);
    const key = document.getElementsByClassName(`${node[0]}`);
    key[0].id = 'active';
    setTimeout(() => key[0].id = '', node[1]);
  }


  render() {
    const button = document.createElement('button');
    button.classList.add('piano-queue-button');
    const button_text = document.createTextNode('Listen to Notes');
    button.appendChild(button_text);
    document.body.appendChild(button);
    this.handleListener();
  }
}

export default PianoQueue;
