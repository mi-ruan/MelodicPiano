class Generator{
  constructor(noteQueue){
    this.initialParams = noteQueue;
    this.generateNoteWeights();
  }

  generateNoteWeights(){
    const notes = this.initialParams.map((node) => node[0]);
    const onlyNotes = notes.map((note) => {
      return note.replace(/\d/g,'');
    });
    this.initialNotes = notes;
    const scaleChoices = Object.keys(SCALES).map((scale) => {
      return scaleIncludeNote(scale, onlyNotes);
    });
    const scaleFiltered = scaleFilter(scaleChoices);
    this.generateScale = scaleFiltered[Math.floor(Math.random() * scaleFilter.length)][0];
    this.initialNoteInterval = {};
    for (let i = 0; i < notes.length - 1; i++) {
      const octavei = notes[i].replace(/\D/g,'');
      const octavej = notes[i + 1].replace(/\D/g,'');
      const posi = (12 * (octavei - 3)) + NOTES.indexOf(onlyNotes[i]);
      const posj = (12 * (octavej - 3)) + NOTES.indexOf(onlyNotes[i+1]);
      if (this.initialNoteInterval[posi - posj] === undefined){
        this.initialNoteInterval[posi - posj] = 1;
      } else {
        this.initialNoteInterval[posi - posj] += 1;
      }
      if (this.initialNoteInterval[posj - posi] === undefined) {
        this.initialNoteInterval[posj - posi] = 1;
      } else {
        this.initialNoteInterval[posj - posi] += 1;
      }
    }
  }

  generateNextNote(note){
    const range = generateRange(note);
    const rangeWeights = this.generateRangeWeights(range, note);
    const rangeCumulWeights = cumulativeWeights(rangeWeights);
    return chooseNextNote(rangeCumulWeights);
  }

  generateRangeWeights(range, ownNote){
    const ownNoteIndex = range.indexOf(ownNote);
    const rangeWeights = range.map(note => {
      const notation = note.replace(/\d/g,'');
      if (SCALES[this.generateScale].includes(notation)) {
        note = [note, 50];
      } else {
        note = [note, 0];
      }
      if (this.initialNotes.includes(note)) {
        note[1] += 100;
      }
      return note;
    });
    let chord;
    if (this.generateScale.includes('Maj')){
      chord = [-12, -7, -5, -4, -2, 0, 2, 4, 5, 7, 12];
    } else {
      chord = [-12, -10, -6, -3, -1, 0, 1, 3, 6, 10, 12];
    }
    const chordIndex = chord.map(note => note + ownNoteIndex);
    const chordValidIndex = chordIndex.filter(note => note >= 0 && note < range.length);
    chordValidIndex.forEach(note => rangeWeights[note][1] += 50);
    const noteIntervalIndex = Object.keys(this.initialNoteInterval)
    .map(interval => [parseInt(interval) + ownNoteIndex, parseInt(interval)]);
    const validNoteIntervalIndex = noteIntervalIndex.filter(note => note[0] >= 0 && note[0] < range.length);
    validNoteIntervalIndex.forEach(note => rangeWeights[note[0]][1] += 50 * this.initialNoteInterval[note[1]]);
    return rangeWeights;
  }

  run(node) {
    const note = node[0];
    const nextNote = this.generateNextNote(note);
    return [nextNote, node[1], node[2] + 0.25];
  }
}

const chooseNextNote = cumulWeights => {
  const totalWeight = cumulWeights[cumulWeights.length - 1][1];
  const choice = Math.random() * totalWeight;
  for (let i = 0; i < cumulWeights.length; i++) {
    if (cumulWeights[i][1] > choice) {
      return cumulWeights[i][0];
      break
    }
  }
}

const cumulativeWeights = rangeWeights => {
  let counter = 0;
  rangeWeights.map(array => {
    const temp = array[1]
    array[1] += counter;
    counter += temp;
  });
  return rangeWeights;
}


const generateRange = note => {
  const notation = note.replace(/\d/g,'');
  const octave = parseInt(note.replace(/\D/g, ''));
  let range = [];
  NOTES.forEach(note => {
    if (NOTES.indexOf(note) >= NOTES.indexOf(notation)){
      range.push(note + (octave - 1))
    }
  });
  NOTES.map(note => {
    range.push(note + octave);
  });
  NOTES.forEach(note => {
    if (NOTES.indexOf(note) <= NOTES.indexOf(notation)){
      range.push(note + (octave + 1))
    }
  });
  if (range.includes('C3')) {
    range = range.slice(range.indexOf('C3'));
  }
  if (range.includes('F6')) {
    range = range.slice(0, range.indexOf('F6') + 1);
  }
  return range;
}

const scaleIncludeNote = (scale, notes) => {
  let counter = 0
  notes.forEach((note) => {
    if (SCALES[scale].includes(note)){ counter++ };
  });
  return [scale, counter];
}

const scaleFilter = (choices) => {
  const weights = choices.map((choice) => choice[1]);
  const maxWeight = Math.max(...weights);
  return choices.filter((choice) => choice[1] === maxWeight);
}

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#',
'A', 'A#', 'B'];

const SCALES = {
  'CMaj': ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
  'DMaj': ['D', 'E', 'F#', 'G', 'A', 'B', 'C#'],
  'EMaj': ['E', 'F#', 'G#', 'A', 'B', 'C#', 'D#'],
  'FMaj': ['F', 'G', 'A', 'A#', 'C', 'D', 'E'],
  'GMaj': ['G', 'A', 'B', 'C', 'D', 'E', 'F#'],
  'AMaj': ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#'],
  'BMaj': ['B', 'C#', 'D#', 'E', 'F#', 'G#', 'A#'],
  'C#Maj': ['C#', 'D#', 'F', 'F#', 'G#', 'A#', 'C'],
  'D#Maj': ['D#', 'F', 'G', 'G#', 'A#', 'C', 'D'],
  'F#Maj': ['F#', 'G#', 'A#', 'B', 'C#', 'D#', 'F'],
  'G#Maj': ['G#', 'A#', 'C', 'C#', 'D#', 'F', 'G'],
  'A#Maj': ['A#', 'C', 'D', 'D#', 'F', 'G', 'A']
}


export default Generator;
