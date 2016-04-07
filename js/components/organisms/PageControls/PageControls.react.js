/*
 * Controls: Organism
 *
 */

import React, { Component } from 'react';
import ContactPerson from '../../molecules/ContactPerson/ContactPerson.react';

export default class PageControls extends Component {
  render() {
  	var combinedClasses = this.props.colorClass + ' page-controls';
    return (
      <aside className={combinedClasses}>
      	<ContactPerson type="../../../img/people/Avatars set-086.svg" alt="Großmarkt Checker" />
      	<h2 className="dark-font">{this.props.headline}</h2>
      </aside>
    );
  }
}
