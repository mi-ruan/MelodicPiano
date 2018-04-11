const KeyboardKeys = (note) => {
  switch (note) {
    case 'C3':
      return 20; //capslock
      break;
    case 'C#3':
      return 49; //1
      break;
    case 'D3':
      return 81; //q
      break;
    case 'D#3':
      return 50; //2
      break;
    case 'E3':
      return 87; //w
      break;
    case 'F3':
      return 69; //e
      break;
    case 'F#3':
      return 52; //4
      break;
    case 'G3':
      return 82; //r
      break;
    case 'G#3':
      return 53; //5
      break;
    case 'A3':
      return 84; //t
      break;
    case 'A#3':
      return 54; //6
      break;
    case 'B3':
      return 89; //y
      break;
    case 'C4':
      return 85; //u
      break;
    case 'C#4':
      return 56; //8
      break;
    case 'D4':
      return 73; //i
      break;
    case 'D#4':
      return 57; //9
      break;
    case 'E4':
      return 79; //o
      break;
    case 'F4':
      return 80; //p
      break;
    case 'F#4':
      return 189; //-
      break;
    case 'G4':
      return 219; //[
      break;
    case 'G#4':
      return 187; //=
      break;
    case 'A4':
      return 221; //]
      break;
    case 'A#4':
      return 8; //backspace
      break;
    case 'B4':
      return 220; //\
      break;
    case 'C5':
      return 16; //shift
      break;
    case 'C#5':
      return 65; //a
      break;
    case 'D5':
      return 90; //z
      break;
    case 'D#5':
      return 83; //s
      break;
    case 'E5':
      return 88; //x
      break;
    case 'F5':
      return 67; //c
      break;
    case 'F#5':
      return 70; //f
      break;
    case 'G5':
      return 86; //v
      break;
    case 'G#5':
      return 71; //g
      break;
    case 'A5':
      return 66; //b
      break;
    case 'A#5':
      return 72; //h
      break;
    case 'B5':
      return 78; //n
      break;
    case 'C6':
      return 77; //m
      break;
    case 'C#6':
      return 75; //k
      break;
    case 'D6':
      return 188; //,
      break;
    case 'D#6':
      return 76; //l
      break;
    case 'E6':
      return 190; //.
      break;
    case 'F6':
      return 191; ///
      break;
    default:
      return 32; //space
      break;
  }
}

export default KeyboardKeys;
