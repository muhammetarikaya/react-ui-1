/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Menu, Icon, Card, Row, Col, Layout } from 'antd';
const SubMenu = Menu.SubMenu;

import s from './Help.css';

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class Help extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  state = {
    openKeys: ['sub1'],
  };
  onOpenChange = (openKeys) => {
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }

  render() {
    return (
      <div>
          <h1>Yardim</h1>
          <hr/>

          <Row>
      <Col span={6}><Menu
        mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Mesaj Gonderimi</span></span>}>
          <Menu.Item key="2">Gonderim Tipleri</Menu.Item>
          <Menu.Item key="1">Gonderim Yapma</Menu.Item>
          <Menu.Item key="3">Ucretlendirme</Menu.Item>
          <Menu.Item key="4">Gonderim Iptal Etme</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Liste Yonetimi</span></span>}>
          <Menu.Item key="5">Liste Olusturma</Menu.Item>
          <Menu.Item key="6">Varolan Listeyi Iceri Aktarma</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Liste Ayarlari</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Sorgu Olusturma</span></span>}>
          <Menu.Item key="9">Sorgu Yaratma</Menu.Item>
          <Menu.Item key="10">Sorgu Guncelleme</Menu.Item>
          <Menu.Item key="11">Sorgu Kaydetme</Menu.Item>
        </SubMenu>
      
      </Menu></Col>
      <Col style={{padding : '20px'}} span={18}>
        
        Tempor eu aliqua duis sit id. Elit exercitation eiusmod pariatur elit labore elit tempor aliquip tempor laboris consequat anim. Sunt nostrud fugiat proident occaecat enim anim est pariatur. Aute tempor dolor ipsum reprehenderit nulla esse et consequat magna ad aliquip eiusmod anim dolore.

Do ad nostrud non dolore sunt eiusmod reprehenderit consectetur aliquip. Labore in et non fugiat. Aliqua in et aute ipsum enim cillum in do.

Nisi est aliquip eiusmod mollit amet occaecat tempor nisi id pariatur commodo amet. Laborum aliquip elit incididunt ut non id occaecat. Proident sunt nisi id aute do duis dolore pariatur. Est cillum irure anim cillum reprehenderit ex dolor laborum eu magna aliquip elit deserunt.

Reprehenderit aliquip amet enim incididunt sint. Ipsum ipsum nisi aliqua quis mollit amet dolor amet tempor anim consectetur proident. Reprehenderit irure quis veniam proident fugiat. Sunt consectetur anim nostrud et nulla consectetur. Quis dolor voluptate veniam eu aliquip eiusmod ea. Dolor elit quis quis ullamco reprehenderit. Aliqua consectetur reprehenderit ad anim non aliqua deserunt aliqua occaecat.

              </Col>
    </Row>
   

          

   
        </div>
    );
  }
}

export default withStyles(s)(Help);
