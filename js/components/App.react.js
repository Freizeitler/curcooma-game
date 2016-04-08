/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageHeader from './organisms/PageHeader/PageHeader.react';
import PageNavi from './organisms/PageNavi/PageNavi.react';
import UserPanel from './organisms/UserPanel/UserPanel.react';
import PageMain from './organisms/PageMain/PageMain.react';
import PageFooter from './organisms/PageFooter/PageFooter.react';

class App extends Component {
  render() {
    return (   
    <div className="page-wrapper">     
      <PageHeader />
      <PageNavi />
      <UserPanel />
      <PageMain content={this.props.children} />
      <PageFooter />
    </div>
    );
  }
}

// REDUX STUFF

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
