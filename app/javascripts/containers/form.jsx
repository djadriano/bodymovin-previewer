// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Q from 'q';

import ResetComponent from '../containers/reset';
import ColorComponent from '../containers/color';

// --------------------------------------------------------------------
// Load Actions
// --------------------------------------------------------------------

import { appActions } from '../actions/index';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

class FormComponent extends Component {

  constructor(props) {
    super(props);
  }

  selectedFiles( evt ) {
    const animationFiles = evt.currentTarget.files;
    const arrPromises = [];

    for( let i in animationFiles ) {

      const defer = Q.defer();

      if( i <= animationFiles.length ) {

        const animationReader = new FileReader();

        animationReader.readAsText( animationFiles[i] );

        animationReader.onloadstart = (e) => {
          this.props.actions.loading();
        }

        animationReader.onloadend = (e) => {
          defer.resolve({
            name: animationFiles[i].name,
            file: e.currentTarget.result
          });
        }

        arrPromises.push( defer.promise );

      }

    }

    Q.all( arrPromises ).then((data) => {
      this.props.actions.loadedFiles( data );
    })
  }

  render() {
    return (
      <div className="bm-form">
        <input type="file" multiple onChange={ this.selectedFiles.bind(this) } />
        {this.props.files.length > 0 &&
          <ResetComponent />
        }
        {this.props.files.length > 0 &&
          <ColorComponent />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  files: state.app.files
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(appActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FormComponent);
