/*
 * Controls: Organism
 *
 */

import React, { Component } from 'react';

export default class PageControls extends Component {
  render() {
  	var combinedClasses = this.props.colorClass + ' controls';
    return (
      <aside className={combinedClasses}>
      	<h2 className="dark-font">Was möchtest du heute tun?</h2>
      </aside>
    );
  }
}
