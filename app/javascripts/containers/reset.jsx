// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// --------------------------------------------------------------------
// Load Actions
// --------------------------------------------------------------------

import { appActions } from '../actions/index';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

class ResetComponent extends Component {

  constructor(props) {
    super(props);
  }

  resetGrid( evt ) {
    evt.preventDefault();

    this.props.actions.reset();
  }

  render() {
    return (
      <a href="#" className="bm-reset" onClick={ this.resetGrid.bind(this) }>Reset</a>
    )
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ResetComponent);
