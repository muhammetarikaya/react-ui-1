import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Layout.css';
import Header from '../Header';
import Feedback from '../Feedback';
import Footer from '../Footer';
import MainContainer from '../MainContainer/MainContainer';
import LeftMenu from '../LeftMenu/LeftMenu';

class Layout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Header />
        <LeftMenu />
        <MainContainer>{this.props.children}</MainContainer>
      </div>
    );
  }
}

export default withStyles(s)(Layout);
