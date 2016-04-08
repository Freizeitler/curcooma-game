/*
 * ContactPerson: Molecule
 *
 */

import React, { Component } from 'react';
import InlineSvg from '../../atoms/InlineSvg/InlineSvg.react';

export default class ContactPerson extends Component {
  render() {
    return (
			<figure className="contact-person">
    		<InlineSvg src={this.props.type} alt={this.props.alt} height="160" width="160" />
			</figure>
    );
  }
}
