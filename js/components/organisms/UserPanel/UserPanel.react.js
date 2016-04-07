/*
 * User Panel: Organism
 * TODO: put dl into organism
 */

import React, { Component } from 'react';
import UserInfo from '../../molecules/UserInfo/UserInfo.react';

export default class UserPanel extends Component {
  render() {
  	var combinedClasses = this.props.colorClass + ' controls';
    return (
    	<aside className="user-panel">
    		<dl className="user-meta">
    			<dt>Spieler</dt><dd>Mustermann</dd>
    			<dt>Level</dt><dd>1</dd>
    		</dl>
      	<UserInfo />
      </aside>
    );
  }
}
