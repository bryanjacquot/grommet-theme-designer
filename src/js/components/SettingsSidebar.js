// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Menu from 'grommet/components/Menu';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Anchor from 'grommet/components/Anchor';
import SearchInput from 'grommet/components/SearchInput';

export default class SettingsSidebar extends Component {

  constructor(props) {
    super(props);
    this._onClose = this._onClose.bind(this);
    this._onCornerRadiusRange = this._onCornerRadiusRange.bind(this);
    this._onThreeDDepthRange = this._onThreeDDepthRange.bind(this);
    this._onIconLineWeightRange = this._onIconLineWeightRange.bind(this);
    this.state = { cornerRadiusValue: 4,
                   threeDDepth: 0,
                   iconLineWeight: 4 };
  }

  _onCornerRadiusRange(event) {
    this.setState({cornerRadiusValue: event.target.value});
  }

  _onThreeDDepthRange(event) {
    this.setState({threeDDepth: event.target.value});
  }

  _onIconLineWeightRange(event) {
    this.setState({iconLineWeight: event.target.value});
  }

  _onClose() {
    this.props.onClose();
  }

  render() {
    return (
      <Sidebar colorIndex="light-2" fixed={true}>
        <Header size="large" justify="between" pad={{horizontal: 'medium'}}>
          <Title onClick={this._onClose} a11yTitle="Close Menu">
            <GrommetLogo inverse={true} />
              Theme Designer
          </Title>
          <Menu responsive={false}>
          <Anchor href="#" icon="Close" onClick={this._onClose}
            a11yTitle="Close Menu" />
          </Menu>
        </Header>
        <Form compact={false} pad="small">
          <FormField label="Theme Name" htmlFor="name">
            <input id="name" type="text"/>
          </FormField>
          <legend>Font</legend>
          <FormField label="Collection" htmlFor="collection">
            <select id="connection" name="collection">
              <option>Fun</option>
              <option>Modern</option>
              <option>Traditional</option>
              <option>Web</option>
            </select>
          </FormField>
          <FormField label="Primary Font" htmlFor="font">
            <SearchInput id="font" name="font" />
          </FormField>
          <legend>Element Style</legend>
          <FormField label="Corner Radius" htmlFor="corner-radius"
            help={this.state.cornerRadiusValue}>
            <input id="corner-radius" name="corner-radius" type="range"
              min="1" max="10" value={this.state.cornerRadiusValue}
              onChange={this._onCornerRadiusRange}/>
          </FormField>
          <FormField label="3-D Depth" htmlFor="three-d-depth"
            help={this.state.threeDDepth}>
            <input id="three-d-depth" name="three-d-depth" type="range"
              min="1" max="10" value={this.state.threeDDepth}
              onChange={this._onThreeDDepthRange}/>
          </FormField>
          <legend>Icon Style</legend>
          <FormField label="Line Weight" htmlFor="icon-line-weight"
            help={this.state.iconLineWeight}>
            <input id="icon-line-weight" name="icon-line-weight" type="range"
              min="1" max="10" value={this.state.iconLineWeight}
              onChange={this._onIconLineWeightRange}/>
          </FormField>
          <FormField label="Linecap" htmlFor="icon-line-cap">
            <select id="icon-line-cap" name="icon-line-cap">
              <option>Round</option>
              <option>Square</option>
              <option>Butt</option>
              <option>Inherit</option>
            </select>
          </FormField>
        </Form>
      </Sidebar>
    );
  }
}
