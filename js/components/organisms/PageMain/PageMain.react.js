/*
 * Header: Organism
 *
 */

import React, { Component } from 'react';

export default class PageMain extends Component {
  render() {
    return (
      <main className="main" role="main" id="main">
      	{this.props.content}
      </main>
    );
  }
}
