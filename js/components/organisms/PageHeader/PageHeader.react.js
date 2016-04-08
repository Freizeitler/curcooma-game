/*
 * Header: Organism
 *
 */

import React, { Component } from 'react';
import PageLogo from '../../molecules/PageLogo/PageLogo.react';

export default class PageHeader extends Component {
  render() {
    return (
      <header className="header">
      	<PageLogo />
      </header>
    );
  }
}
