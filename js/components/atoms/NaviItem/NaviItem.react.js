/*
 * NaviItem: atom
 *
 */

import React, { Component } from 'react';

export default class NaviItem extends Component {
  render() {
    return (
      <li className="navi-item">
      	<a href={this.props.href} title={this.props.title}>{this.props.linkText}</a>
      </li>
    );
  }
}
