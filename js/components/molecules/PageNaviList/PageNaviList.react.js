/*
 * PageNaviList: molecule
 *
 */

import React, { Component } from 'react';
import NaviItem from '../../atoms/NaviItem/NaviItem.react';

export default class PageNaviList extends Component {
  render() {
    return (
    	<ul className="page-navi-list">
      	<NaviItem href="#" title="Dashboard" linkText="Dashboard" />
      	<NaviItem href="#" title="Restaurant verwalten" linkText="Restaurant verwalten" />
      	<NaviItem href="#" title="Personal verwalten" linkText="Personal verwalten" />
      	<NaviItem href="#" title="Großmarkt" linkText="Großmarkt" />
      	<NaviItem href="#" title="Werbung & Marketing" linkText="Werbung & Marketing" />
      </ul>
    );
  }
}
