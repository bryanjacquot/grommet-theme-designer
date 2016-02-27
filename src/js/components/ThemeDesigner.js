import React, { Component } from 'react';
import App from 'grommet/components/App';
import Split from 'grommet/components/Split';
import SettingsSidebar from './SettingsSidebar';
import Workspace from './Workspace';

export default class ThemeDesigner extends Component {

  constructor () {
    super();
    this._onSidebarClose = this._onSidebarClose.bind(this);
    this._onSidebarOpen = this._onSidebarOpen.bind(this);
    this.state = {
      enableSettingsSidebar: true
    };
  }

  _onSidebarOpen () {
    this.setState({enableSettingsSidebar: true});
  }

  _onSidebarClose () {
    this.setState({enableSettingsSidebar: false});
  }

  render () {
    let settingsSidebar = null;
    if ( this.state.enableSettingsSidebar ) {
      settingsSidebar = <SettingsSidebar onClose={this._onSidebarClose}/>;
    }

    return (
      <App centered={false}>
        <Split flex="right" pad="none">
          {settingsSidebar}
          <Workspace hideTitle={this.state.enableSettingsSidebar} _onSidebarOpen={this._onSidebarOpen}/>
        </Split>
      </App>
    );
  }
};
