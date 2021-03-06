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
  'A#Maj': ['A#', 'C', 'D', 'D#', 'F', 'G', 'A'],
  'CMinN': ['C', 'D', 'D#', 'F', 'G', 'G#', 'A#'],
  'DMinN': ['D', 'E', 'F', 'G', 'A', 'A#', 'C'],
  'EMinN': ['E', 'F#', 'G', 'A', 'B', 'C', 'D'],
  'FMinN': ['F', 'G', 'G#', 'A#', 'C', 'C#', 'D#'],
  'GMinN': ['G', 'A', 'A#', 'C', 'D', 'D#', 'F'],
  'AMinN': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  'BMinN': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A'],
  'C#MinN': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'B'],
  'D#MinN': ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'C#'],
  'F#MinN': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E'],
  'G#MinN': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'F#'],
  'A#MinN': ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'G#'],
  'CMinH': ['C', 'D', 'D#', 'F', 'G', 'G#', 'B'],
  'DMinH': ['D', 'E', 'F', 'G', 'A', 'A#', 'C#'],
  'EMinH': ['E', 'F#', 'G', 'A', 'B', 'C', 'D#'],
  'FMinH': ['F', 'G', 'G#', 'A#', 'C', 'C#', 'E'],
  'GMinH': ['G', 'A', 'A#', 'C', 'D', 'D#', 'F#'],
  'AMinH': ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
  'BMinH': ['B', 'C#', 'D', 'E', 'F#', 'G', 'A#'],
  'C#MinH': ['C#', 'D#', 'E', 'F#', 'G#', 'A', 'C'],
  'D#MinH': ['D#', 'F', 'F#', 'G#', 'A#', 'B', 'D'],
  'F#MinH': ['F#', 'G#', 'A', 'B', 'C#', 'D', 'F'],
  'G#MinH': ['G#', 'A#', 'B', 'C#', 'D#', 'E', 'G'],
  'A#MinH': ['A#', 'C', 'C#', 'D#', 'F', 'F#', 'A'],
  'CMinB': ['C', 'D#', 'F', 'F#', 'G', 'A#'],
  'DMinB': ['D', 'F', 'G', 'G#', 'A', 'C'],
  'EMinB': ['E', 'G', 'A', 'A#', 'B', 'D'],
  'FMinB': ['F', 'G#', 'A#', 'B', 'C', 'D#'],
  'GMinB': ['G', 'A#', 'C', 'C#', 'D', 'F'],
  'AMinB': ['A', 'C', 'D', 'D#', 'E', 'G'],
  'BMinB': ['B', 'D', 'E', 'F', 'F#', 'A'],
  'C#MinB': ['C#', 'E', 'F#', 'G', 'G#', 'B'],
  'D#MinB': ['D#', 'F#', 'G#', 'A', 'A#', 'C#'],
  'F#MinB': ['F#', 'A', 'B', 'C', 'C#', 'E'],
  'G#MinB': ['G#', 'B', 'C#', 'D', 'D#', 'F#'],
  'A#MinB': ['A#', 'C#', 'D#', 'E', 'F', 'G#'],
  'CMajB': ['C', 'D', 'D#', 'E', 'G', 'A'],
  'DMajB': ['D', 'E', 'F', 'F#', 'A', 'B'],
  'EMajB': ['E', 'F#', 'G', 'G#', 'B', 'C#'],
  'FMajB': ['F', 'G', 'G#', 'A', 'C', 'D'],
  'GMajB': ['G', 'A', 'A#', 'B', 'D', 'E'],
  'AMajB': ['A', 'B', 'C', 'C#', 'E', 'F#'],
  'BMajB': ['B', 'C#', 'D', 'D#', 'F#', 'G#'],
  'C#MajB': ['C#', 'D#', 'E', 'F', 'G#', 'A#'],
  'D#MajB': ['D#', 'F', 'F#', 'G', 'A#', 'C'],
  'F#MajB': ['F#', 'G#', 'A', 'A#', 'C#', 'D#'],
  'G#MajB': ['G#', 'A#', 'B', 'C', 'D#', 'F'],
  'A#MajB': ['A#', 'C', 'C#', 'D', 'F', 'G'],
  'CMajP': ['C', 'D', 'E', 'G', 'A'],
  'DMajP': ['D', 'E', 'F#', 'A', 'B'],
  'EMajP': ['E', 'F#', 'G#', 'B', 'C#'],
  'FMajP': ['F', 'G', 'A', 'C', 'D'],
  'GMajP': ['G', 'A', 'B', 'D', 'E'],
  'AMajP': ['A', 'B', 'C#', 'E', 'F#'],
  'BMajP': ['B', 'C#', 'D#', 'F#', 'G#'],
  'C#MajP': ['C#', 'D#', 'F', 'G#', 'A#'],
  'D#MajP': ['D#', 'F', 'G', 'A#', 'C'],
  'F#MajP': ['F#', 'G#', 'A#', 'C#', 'D#'],
  'G#MajP': ['G#', 'A#', 'C', 'D#', 'F'],
  'A#MajP': ['A#', 'C', 'D', 'F', 'G'],
  'CMinP': ['C', 'D#', 'F', 'G', 'A#'],
  'DMinP': ['D', 'F', 'G', 'A', 'C'],
  'EMinP': ['E', 'G', 'A', 'B', 'D'],
  'FMinP': ['F', 'G#', 'A#', 'C', 'D#'],
  'GMinP': ['G', 'A#', 'C', 'D', 'F'],
  'AMinP': ['A', 'C', 'D', 'E', 'G'],
  'BMinP': ['B', 'D', 'E', 'F#', 'A'],
  'C#MinP': ['C#', 'E', 'F#', 'G#', 'B'],
  'D#MinP': ['D#', 'F#', 'G#', 'A#', 'C#'],
  'F#MinP': ['F#', 'A', 'B', 'C#', 'E'],
  'G#MinP': ['G#', 'B', 'C#', 'D#', 'F#'],
  'A#MinP': ['A#', 'C#', 'D#', 'F', 'G#'],
}

export default SCALES;
