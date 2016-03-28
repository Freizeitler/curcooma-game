/*
 * PageLogo: Molecule
 *
 */

import React, { Component } from 'react';
import InlineSvg from '../../atoms/InlineSvg/InlineSvg.react';

export default class UserInfo extends Component {
  render() {
    return (
			<figure className="user-info">
    		<InlineSvg src="../../../img/people/Avatars set-006.svg" alt="Avatar" height="80" width="80" />
			</figure>
    );
  }
}
