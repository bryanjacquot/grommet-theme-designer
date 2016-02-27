import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Title from 'grommet/components/Title';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import GrommetLogo from 'grommet/components/icons/Grommet';
import DesignPage from './DesignPage';
import SamplePage from './SamplePage';
import DevelopPage from './DevelopPage';

export default class Workspace extends Component {

  constructor (props) {
    super(props);
    this._onClickTitle = this._onClickTitle.bind(this);
  }

  _onClickTitle () {
    this.props._onSidebarOpen();
  }

  render () {
    let title=null;

    if ( ! this.props.hideTitle ) {
      title = (
        <Title onClick={this._onClickTitle} a11yTitle="Open Menu">
          <GrommetLogo />
          Theme Designer
        </Title>
      );
    }

    return (
      <Article pad="none">
        <Header justify="between" size="large" pad={{horizontal: 'medium'}}>
          {title}
        </Header>
        <Section pad="medium" full="horizontal">
          <Tabs>
            <Tab title="Design">
              <DesignPage/>
            </Tab>
            <Tab title="Sample">
              <SamplePage/>
            </Tab>
            <Tab title="Develop">
              <DevelopPage/>
            </Tab>
          </Tabs>
          </Section>
      </Article>
    );
  }
};
