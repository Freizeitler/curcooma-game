/*
 * PageImg: Atom
 *
 */

import React, { Component } from 'react';

export default class PageImg extends Component {
  render() {
    return (
      <img src={this.props.src} height={this.props.height} width={this.props.width} alt={this.props.alt} />
    );
  }
}
