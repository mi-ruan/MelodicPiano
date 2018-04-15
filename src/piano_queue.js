class PianoQueue {
  constructor() {
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
      } else if (this.recordFlag === false && this.playbackFlag === true) {
        this.playbackFlag = false;
        this.noteQueue = [];
        button.removeChild(button.firstChild);
        const button_text = document.createTextNode('Listen to Notes');
        button.appendChild(button_text);
      }
    });
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
