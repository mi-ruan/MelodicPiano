import _ from 'lodash';
import * as Tone from "tone";

  function component() {
    var element = document.createElement('div');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }

  document.body.appendChild(component());

  //create a synth and connect it to the master output (your speakers)
  var synth = new Tone.Synth().toMaster();

  //play a middle 'C' for the duration of an 8th note
  synth.triggerAttackRelease("C4", "8n");
