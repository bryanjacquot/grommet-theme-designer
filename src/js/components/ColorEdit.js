import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Label from 'grommet/components/Label';

export default class ColorEdit extends Component {

  constructor (props) {
    super(props);
    this._onClose = this._onClose.bind(this);
  }

  _onClose() {
    this.props.onClose();
  }

  render () {
    return (
      <Layer onClose={this._onClose} closer={true} align="right">
        <Label>Sample {this.props.color}</Label>
      </Layer>
    );
  }
}
