// ------------------------------------------------------
// Define Actions
// ------------------------------------------------------

export function start() {
  return { type: 'START_APP' };
}

export function loading() {
  return { type: 'LOADING_FILES' };
}

export function loadedFiles( files ) {
  return { type: 'LOADED_FILES', files };
}

export function changeColor( color ) {
  return { type: 'CHANGE_COLOR', color };
}

export function reset() {
  return { type: 'RESET_FILES' };
}

// ------------------------------------------------------
// Below example of No Pure Actions
// ------------------------------------------------------

export function foo() {
  return (dispatch, getState) => {

  }
}
