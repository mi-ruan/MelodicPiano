class Generator{
  constructor(noteQueue){
    this.initialParams = noteQueue;
    this.generateNoteWeights();
  }

  generateNoteWeights(){
    const notes = this.initialParams.map((node) => node[0]);
    const onlyNotes = notes.map((notes) => {
      return notes.replace(/\d/g,'');
    });
    const scaleChoices = Object.keys(SCALES).map((scale) => {
      return scaleIncludeNote(scale, onlyNotes);
    });
    const scaleFiltered = scaleFilter(scaleChoices);
    this.generateScale = scaleFiltered[Math.floor(Math.random() * scaleFilter.length)][0]
  }

  generateNextNote(note){
    const range = generateRange(note);
    const rangeWeights = this.generateRangeWeights(range, note);
    const rangeCumulWeights = cumulativeWeights(rangeWeights);
    debugger
    return range[Math.floor(Math.random() * range.length)]
  }

  generateRangeWeights(range, ownNote){
    const rangeWeights = range.map(note => {
      const notation = note.replace(/\d/g,'');
      if (SCALES[this.generateScale].includes(notation)) {
        return [note, 1];
      } else {
        return [note, 0];
      }
    });
    return rangeWeights;
  }

  run(node) {
    const note = node[0];
    const nextNote = this.generateNextNote(note);
    return [nextNote, node[1], node[2] + 0.25];
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
