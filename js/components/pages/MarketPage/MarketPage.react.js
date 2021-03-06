/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageControls from '../../organisms/PageControls/PageControls.react';

class MarketPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
     <section className="main-content">
        <div className="main-content-grid">

          <h1>Curcooma! - Großmarkt</h1>
          
          <PageControls colorClass="color-purple-400" headline="Hey Mustermann, ich kann fast alles besorgen. Was brauchst Du heute?" />
        </div>
      </section>
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
export default connect(select)(MarketPage);
