// --------------------------------------------------------------------
// React and Redux Imports
// --------------------------------------------------------------------

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import bodymovin from 'bodymovin';

// --------------------------------------------------------------------
// Define the Container Component
// --------------------------------------------------------------------

class GridComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.files.map((item, i) => {
      this.addAnimation(item.file, this.refs[`animation${i}`]);
    });
  }

  componentDidUpdate() {
    let animationFiles = this.props.files;
    this.addAnimation(animationFiles[ (animationFiles.length-1) ].file, this.refs[`animation${animationFiles.length-1}`]);
  }

  addAnimation( json, element ) {
    bodymovin.loadAnimation({
      container: element,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: JSON.parse(json)
    });
  }

  render() {
    return (
      <ul className="bm-grid">
        {
          this.props.files.map((item, i) => {
            return(
              <li key={i}>
                <div ref={`animation${i}`}></div>
                <span className="bm-grid-name">{item.name}</span>
              </li>
            )
          })
        }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  files: state.app.files
});

export default connect(mapStateToProps)(GridComponent);
