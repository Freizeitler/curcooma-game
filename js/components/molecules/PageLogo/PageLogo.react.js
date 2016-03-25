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
      	<PageImg src="http://placehold.it/350x150" width="100" height="auto" alt="Curcooma! Logo" />
      </figure>
    );
  }
}
