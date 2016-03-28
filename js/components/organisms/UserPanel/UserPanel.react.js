/*
 * User Panel: Organism
 *
 */

import React, { Component } from 'react';
import UserInfo from '../../molecules/UserInfo/UserInfo.react';

export default class UserPanel extends Component {
  render() {
  	var combinedClasses = this.props.colorClass + ' controls';
    return (
    	<aside className="user-panel">
      	<UserInfo />
      </aside>
    );
  }
}
