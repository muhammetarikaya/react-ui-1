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
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

import s from './Announcement.css';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.

  it can be found as a welcome guest in many households across the world.

  it can be found as a welcome guest in many households across the world.

  it can be found as a welcome guest in many households across the world.

  it can be found as a welcome guest in many households across the world.
  it can be found as a welcome guest in many households across the world.

  it can be found as a welcome guest in many households across the world.
  it can be found as a welcome guest in many households across the world.
  it can be found as a welcome guest in many households across the world.

  
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

class Announcement extends React.Component {
  static propTypes = {
    news: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        content: PropTypes.string,
      })
    ).isRequired,
  };

  render() {
    return (
      <Collapse  bordered={true} defaultActiveKey={['1']}>
        <Panel  style={{backgroundColor : 'red'}} showArrow='true' header="Duyuru 12.02.2017" key="1" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="Duyuru 34.02.2017" key="2" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="Duyuru 24.02.2017"key="3" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>

    );
  }
}

export default withStyles(s)(Announcement);
