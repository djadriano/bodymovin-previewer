// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component } from 'react';

// --------------------------------------------------------------------
// Define Component
// --------------------------------------------------------------------

export default class LoadingComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bm-loading">
        Loading animations...
      </div>
    );
  }
}
