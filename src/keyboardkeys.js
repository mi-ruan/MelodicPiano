const KeyboardKeys = (keyCode) => {
  if (keyCode === 192) return 'C3'; // `
  if (keyCode === 49) return 'C#3'; // 1
  if (keyCode === 81) return 'D3'; // q
  if (keyCode === 50) return 'D#3'; // 2
  if (keyCode === 87) return 'E3'; // w
  if (keyCode === 69) return 'F3'; // e
  if (keyCode === 52) return 'F#3'; // 4
  if (keyCode === 82) return 'G3'; // r
  if (keyCode === 53) return 'G#3'; // 5
  if (keyCode === 84) return 'A3'; // t
  if (keyCode === 54) return 'A#3'; // 6
  if (keyCode === 89) return 'B3'; // y
  if (keyCode === 85) return 'C4'; // u
  if (keyCode === 56) return 'C#4'; // 8
  if (keyCode === 73) return 'D4'; // i
  if (keyCode === 57) return 'D#4'; // 9
  if (keyCode === 79) return 'E4'; // o
  if (keyCode === 80) return 'F4'; // p
  if (keyCode === 189) return 'F#4'; // -
  if (keyCode === 219) return 'G4'; // [
  if (keyCode === 187) return 'G#4'; // =
  if (keyCode === 221) return 'A4'; // ]
  if (keyCode === 8) return 'A#4'; // backspace
  if (keyCode === 220) return 'B4'; // \
  if (keyCode === 16 || keyCode === 13) return 'C5'; // shift or enter
  if (keyCode === 65) return 'C#5'; // a
  if (keyCode === 90) return 'D5'; // z
  if (keyCode === 83) return 'D#5'; // s
  if (keyCode === 88) return 'E5'; // x
  if (keyCode === 67) return 'F5'; // c
  if (keyCode === 70) return 'F#5'; // f
  if (keyCode === 86) return 'G5'; // v
  if (keyCode === 71) return 'G#5'; // g
  if (keyCode === 66) return 'A5'; // b
  if (keyCode === 72) return 'A#5'; // h
  if (keyCode === 78) return 'B5'; // n
  if (keyCode === 77) return 'C6'; // m
  if (keyCode === 75) return 'C#6'; // k
  if (keyCode === 188) return 'D6'; // ,
  if (keyCode === 76) return 'D#6'; // l
  if (keyCode === 190) return 'E6'; // .
  if (keyCode === 191) return 'F6'; // /
  if (keyCode) return 'break';
}

export default KeyboardKeys;
