/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class MarketPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
      <section>
        <h1>Curcooma! - Großmarkt</h1>
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
