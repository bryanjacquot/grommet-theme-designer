// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';

const CLASS_ROOT = 'logo-icon';

class Logo extends Component {

  render() {
    var classes = [CLASS_ROOT];
    if (this.props.size) {
      classes.push(CLASS_ROOT + '--' + this.props.size);
    }
    if (this.props.colorIndex) {
      classes.push("color-index-" + this.props.colorIndex);
    }
    if (this.props.busy) {
      classes.push(CLASS_ROOT + '--busy');
    }
    if (this.props.className) {
      classes.push(this.props.className);
    }
    return (
      <svg className={classes.join(' ')} viewBox="0 0 48 48" version="1.1">
        <title>product logo</title>
        <g fill="none" fillRule="evenodd" >
          <g transform="translate(1.000000, 5.000000)" strokeWidth="2">
            <path d="M23.0030785,37 L46,24.5 L46,13 L23.0030785,13 L0,24.5 L8.8817842e-16,37 L23.0030785,37 Z"></path>
            <path d="M22.9969215,24 L45.9999999,12.5 L46,0 L22.9969215,0 L3.0027536e-11,12.5 L0,24 L22.9969215,24 Z" transform="translate(23.000000, 12.000000) scale(-1, 1) translate(-23.000000, -12.000000) "></path>
            <path d="M1,1 L23.0030785,13 L23.0030785,24 L1,36"></path>
          </g>
        </g>
      </svg>
    );
  }

}

Logo.propTypes = {
  busy: PropTypes.bool,
  colorIndex: PropTypes.string,
  inverse: PropTypes.bool,
  size: PropTypes.oneOf(["medium", "large"])
};

Logo.defaultProps = {
  colorIndex: 'brand'
};

module.exports = Logo;
