import React, { Component } from 'react';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import ColorEdit from './ColorEdit';

export default class DesignPage extends Component {

  constructor () {
    super();
    this._onOpen = this._onOpen.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = {color: null};
  }

  _onOpen(color) {
    this.setState({color: color});
  }

  _onClose(event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({color: null});
  }

  render () {

    var COLORS = ['brand', 'neutral-1', 'neutral-2', 'neutral-3', 'neutral-4',
      'accent-1', 'accent-2',
      'grey-1', 'grey-2', 'grey-3', 'grey-4', 'light-2', 'light-1',
      'critical', 'warning', 'ok', 'unknown'];

    var coloredBoxes = COLORS.map(function (color) {
      return <Brick key={color} colorIndex={color} pad="small" href="#" onClick={this._onOpen.bind(event, color)}>{color}</Brick>;
    }, this);

    var activeLayer = null;
    if (this.state.color) {
      activeLayer = <ColorEdit onClose={this._onClose} color={this.state.color}/>;
    }

    return (
      <Bricks>
          {coloredBoxes}
          {activeLayer}
      </Bricks>
    );
  }
};
