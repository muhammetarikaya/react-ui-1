import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Card } from "antd";
import s from './MainContainer.css';

class MainContainer extends React.Component {
  static props = {
    children: PropTypes.node.isRequired,
  };
  render() {
    return <Card><div className={s.mainContainer}>{this.props.children}</div>;</Card>
  }
}

export default withStyles(s)(MainContainer);
