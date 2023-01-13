// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let hiHats =  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]

// Determine array based off passed string
const getDrumArrayByName = (name) => {
    switch (name) {
      case 'snares':
        return snares;
      case 'kicks':
        return kicks;
      case 'hiHats':
        return hiHats;
      case 'rideCymbals':
        return rideCymbals;
      default:
        return;
    }
  };

// How to choose whether a drum is on or off
const toggleDrum = (drumArrayName, ind) => {
    const drums = getDrumArrayByName(drumArrayName);
    if (!drums || ind < 0) {
      return;
    }
    // Toggle Feature
    drums[ind] = !drums[ind];
  };

// Clear drum feature
const clear = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  
  for (let i = 0; i < drums.length; i++) {
    drums[i] = false
  } 

};

// Drum Inversion Feature
const invert = (drumArrayName) => {
  const drums = getDrumArrayByName(drumArrayName);
  if (!drums) {
    return;
  }
  for (let k = 0; k < drums.length; k++) {
    drums[k] = !drums[k];
  }
};