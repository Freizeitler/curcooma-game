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
      	<NaviItem href="/dashboard" title="Dashboard" linkText="Dashboard" />
      	<NaviItem href="/restaurant" title="Restaurant verwalten" linkText="Restaurant verwalten" />
      	<NaviItem href="/staffing" title="Personal verwalten" linkText="Personal verwalten" />
      	<NaviItem href="/market" title="Großmarkt" linkText="Großmarkt" />
      	<NaviItem href="/publicity" title="Werbung & Marketing" linkText="Werbung & Marketing" />
      </ul>
    );
  }
}
