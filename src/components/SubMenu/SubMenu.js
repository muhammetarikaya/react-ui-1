import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './SubMenu.css';
import LeftMenuItem from '../LeftMenu/LeftMenuItem';
import kampanyaIcon from './icons/leftMenu-icon-kampanya.png';
import buyIcon from './icons/leftMenu-icon-buy.png';
import smsIcon from './icons/leftMenu-icon-sms.png';
import contactIcon from './icons/leftMenu-icon-contact.png';
import iconBoard from './icons/leftMenu-icon-board.png';
import iconCampaign from './icons/leftMenu-icon-kampanya.png';
import iconSettings from './icons/leftMenu-icon-settings.png';

class SubMenu extends React.Component {
  render() {
    return (
      <div style={this.props.style} className={s.leftMenuContainer}>
        <div className={s.menuItemEmpty}/>

          {this.props.children}
        </div>
    );
  }
}

export default withStyles(s)(SubMenu);
