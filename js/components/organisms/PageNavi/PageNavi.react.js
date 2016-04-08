/*
 * Header: Organism
 *
 */

import React, { Component } from 'react';
import PageNaviList from '../../molecules/PageNaviList/PageNaviList.react';

export default class PageNavi extends Component {
  render() {
    return (
      <nav className="navi" role="navigation">
      	<PageNaviList />
      </nav>
    );
  }
}
