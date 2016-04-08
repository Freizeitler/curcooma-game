/*
 * PageLogo: Molecule
 *
 */

import React, { Component } from 'react';
import PageImg from '../../atoms/PageImg/PageImg.react';

export default class PageLogo extends Component {
  render() {
    return (
      <figure className="page-logo">
      	<PageImg src="./img/logo.svg" width="220" height="auto" alt="Curcooma! Logo" />
      </figure>
    );
  }
}
