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
// Load Component
// --------------------------------------------------------------------

import FormComponent from '../containers/form';
import LoadingComponent from '../components/loading';
import GridComponent from '../containers/grid';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

class App extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(appActions.start());
  }

  render() {
    return (
      <div className="bm-intro" style={{background: this.props.bgColor}}>
        <header className="bm-header">
          <h1 className="bm-title">Bodymovin Previewer</h1>
          {this.props.loading &&
            <LoadingComponent />
          }
          <FormComponent />
        </header>
        {this.props.files.length > 0 &&
          <GridComponent />
        }
        {this.props.files.length === 0 &&
          <div className="bm-intro-message">Selecione arquivos para visualizar...</div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: state.app.loading,
  files: state.app.files,
  bgColor: state.app.color
});

export default connect(mapStateToProps)(App);
