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

class ColorComponent extends Component {

  constructor(props) {
    super(props);
  }

  changeColor( evt ) {
    this.props.actions.changeColor( evt.currentTarget.value );
  }

  render() {
    return (
      <input type="color" className="bm-color" value={this.props.bgColor} onChange={ this.changeColor.bind(this) } />
    )
  }
}

const mapStateToProps = (state) => ({
  bgColor: state.app.color
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ColorComponent);
