/*
 * Avatar01: atom
 *
 */

import React, { Component } from 'react';

export default class InlineSvg extends Component {
  render() {
    return (
				<img src={this.props.src} alt={this.props.alt} height={this.props.height} width={this.props.width} />
    );
  }
}
