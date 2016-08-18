// -----------------------------------------------------
// Define the state of Component
// -----------------------------------------------------

const appState = {
  initialized: false,
  loading: false,
  files: [],
  color: '#ffffff'
};

// -----------------------------------------------------
// Subscribe the actions of component
// -----------------------------------------------------

const appReducer = (state = appState, action) => {
  let newState = Object.assign({}, state);

  switch( action.type ) {
    case 'START_APP':
      newState.initialized = true;
      return newState;

    case 'LOADING_FILES':
      newState.loading = true;
      return newState;

    case 'LOADED_FILES':
      let newFiles = newState.files;
      newFiles = newFiles.concat(action.files);
      newState.files = newFiles;
      newState.loading = false;

      return newState;

    case 'RESET_FILES':
      newState.files = [];
      return newState;

    case 'CHANGE_COLOR':
      newState.color = action.color;
      return newState;

    default:
      return state;
  }
};

export default appReducer;
