/*
 * HomePage
 * This is the first thing users see of our App
 */

import { asyncChangeProjectName, asyncChangeOwnerName } from '../../../actions/AppActions';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import PageControls from '../../organisms/PageControls/PageControls.react';

class StaffingPage extends Component {
  render() {
    const dispatch = this.props.dispatch;
    const { projectName, ownerName } = this.props.data;
    return (
       <section className="main-content">
        <div className="main-content-grid">

          <h1>Curcooma! - Personal verwalten</h1>
          
          <PageControls colorClass="color-blue-400" />
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
export default connect(select)(StaffingPage);
