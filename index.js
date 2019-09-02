function getChord(key, degree) {
  switch(key) {

    case 'C':
      switch(degree) {
        case 1:
          return 'C';
        case 2:
          return 'Dm';
        case 3:
          return 'Em';
        case 4:
          return 'F';
        case 5:
          return 'G';
        case 6:
          return 'Am';
        case 7:
          return 'Bdim';
      }

    case 'G':
      switch(degree) {
        case 1:
          return 'G';
        case 2:
          return 'Am';
        case 3:
          return 'Bm';
        case 4:
          return 'C';
        case 5:
          return 'D';
        case 6:
          return 'Em';
        case 7:
          return 'F#dim';
      }

    case 'D':
      switch(degree) {
        case 1:
          return 'D';
        case 2:
          return 'Em';
        case 3:
          return 'F#m';
        case 4:
          return 'G';
        case 5:
          return 'A';
        case 6:
          return 'Bm';
        case 7:
          return 'C#dim';
      }

    case 'A':
      switch(degree) {
        case 1:
          return 'A';
        case 2:
          return 'Bm';
        case 3:
          return 'C#m';
        case 4:
          return 'D';
        case 5:
          return 'E';
        case 6:
          return 'F#m';
        case 7:
          return 'G#dim';
      }

    case 'E':
      switch(degree) {
        case 1:
          return 'E';
        case 2:
          return 'F#m';
        case 3:
          return 'G#m';
        case 4:
          return 'A';
        case 5:
          return 'B';
        case 6:
          return 'C#m';
        case 7:
          return 'D#dim';
      }

    case 'B':
      switch(degree) {
        case 1:
          return 'B';
        case 2:
          return 'C#m';
        case 3:
          return 'D#m';
        case 4:
          return 'E';
        case 5:
          return 'F#';
        case 6:
          return 'G#m';
        case 7:
          return 'A#dim';
      }

    case 'F#':
      switch(degree) {
        case 1:
          return 'F#';
        case 2:
          return 'G#m';
        case 3:
          return 'A#m';
        case 4:
          return 'B';
        case 5:
          return 'C#';
        case 6:
          return 'D#m';
        case 7:
          return 'E#dim';
      }

    case 'C#':
      switch(degree) {
        case 1:
          return 'C#';
        case 2:
          return 'D#m';
        case 3:
          return 'E#m';
        case 4:
          return 'F#';
        case 5:
          return 'G#';
        case 6:
          return 'A#m';
        case 7:
          return 'B#dim';
      }

    case 'F':
      switch(degree) {
        case 1:
          return 'F';
        case 2:
          return 'Gm';
        case 3:
          return 'Am';
        case 4:
          return 'Bb';
        case 5:
          return 'C';
        case 6:
          return 'Dm';
        case 7:
          return 'Edim';
      }

    case 'Bb':
      switch(degree) {
        case 1:
          return 'Bb';
        case 2:
          return 'Cm';
        case 3:
          return 'Dm';
        case 4:
          return 'Eb';
        case 5:
          return 'F';
        case 6:
          return 'Gm';
        case 7:
          return 'Adim';
      }

    case 'Eb':
      switch(degree) {
        case 1:
          return 'Eb';
        case 2:
          return 'Fm';
        case 3:
          return 'Gm';
        case 4:
          return 'Ab';
        case 5:
          return 'Bb';
        case 6:
          return 'Cm';
        case 7:
          return 'Ddim';
      }

    case 'Ab':
      switch(degree) {
        case 1:
          return 'Ab';
        case 2:
          return 'Bbm';
        case 3:
          return 'Cm';
        case 4:
          return 'Db';
        case 5:
          return 'Eb';
        case 6:
          return 'Fm';
        case 7:
          return 'Gdim';
      }

    case 'Db':
      switch(degree) {
        case 1:
          return 'Db';
        case 2:
          return 'Ebm';
        case 3:
          return 'Fm';
        case 4:
          return 'Gb';
        case 5:
          return 'Ab';
        case 6:
          return 'Bbm';
        case 7:
          return 'Cdim';
      }

    case 'Gb':
      switch(degree) {
        case 1:
          return 'Gb';
        case 2:
          return 'Abm';
        case 3:
          return 'Bbm';
        case 4:
          return 'Cb';
        case 5:
          return 'Db';
        case 6:
          return 'Ebm';
        case 7:
          return 'Fdim';
      }

  }
}

const keys = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const flat_aliases = {
  'C#': 'Db',
  'F#': 'Gb'
};
const sharp_aliases = {
  'Bb': 'A#',
  'Eb': 'D#',
  'Ab': 'G#'
};

function fifthOf(key) {
  const idx = keys.findIndex((element, inner_idx) => {
    return element === key;
  });
  return keys[(idx + 7) % 12];
}

// for (const keynum in keys) {
//   const key = keys[keynum];
//   console.log(key);
//   for (let degree = 1; degree <= 7; degree++) {
//     console.log(`\t${degree} = ${getChord(key, degree)}`)
//   }
// }


module.exports = {
  getChord: getChord,
  fifthOf: fifthOf
}