import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './LeftMenu.css';
import LeftMenuItem from './LeftMenuItem';
import smsIcon from './icons/leftMenu-icon-sms.png';
import contactIcon from './icons/leftMenu-icon-contact.png';
import iconSmpp from './icons/icon-smpp.png';
import iconSms from './icons/icon-sms.png';
import iconEmail from './icons/icon-email.png';
import iconIvr from './icons/icon-iv.png';
import iconZim from './icons/icon-zim.png';
import iconBell from './icons/icon-bell.png';
import iconBoard from './icons/leftMenu-icon-board.png';
import iconSystem from './icons/icon-system.png';
import iconSettings from './icons/leftMenu-icon-settings.png';
import SubMenu from '../SubMenu/SubMenu';

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.handleHover = this.handleHover.bind(this);
    this.getStyle = this.getStyle.bind(this);
    this.initMenuState();
  }

  state = {
    states: {
      liste: false,
      sistem: false,
      gonderim: false,
    },
  };

  getStyle(key) {
    const obj = this.state.states[key];
    let result = false;
    if (obj) {
      result = obj;
    }

    return result ? { display: 'block' } : { display: 'none' };
  }

  initMenuState() {
    this.state.states = {
      liste: false,
      sistem: false,
      gonderim: false,
    };
  }

  handleHover(key) {
    if (this.state.states[key] != null) {
      this.state.states[key] = !this.state.states[key];
    } else {
      this.state.states[key] = false;
    }
    if (this.state.states[key] === true) {
      Object.keys(this.state.states).forEach(element => {
        if (element !== key) {
          this.state.states[element] = false;
        }
      });
    }
  }

  render() {
    return (
      <div className={s.leftMenuContainer}>
        <div className={s.menuItemEmpty} />
        <LeftMenuItem to="/" icon={iconBoard}>
          Ana Sayfa
        </LeftMenuItem>

        <LeftMenuItem
          onClick={() => this.handleHover('gonderim')}
          icon={smsIcon}
        >
          Gönderim
          <SubMenu style={this.getStyle('gonderim')}>
            <LeftMenuItem to="/Gonderim?type=sms" icon={iconSms}>
              SMS
            </LeftMenuItem>

            <LeftMenuItem to="/Gonderim?type=email" icon={iconEmail}>
              Email
            </LeftMenuItem>

            <LeftMenuItem to="/Gonderim?type=ivr" icon={iconIvr}>
              IVR
            </LeftMenuItem>

            <LeftMenuItem to="/Gonderim?type=zim" icon={iconZim}>
              ZIM
            </LeftMenuItem>
          </SubMenu>
        </LeftMenuItem>

        <LeftMenuItem
          onClick={() => this.handleHover('liste')}
          icon={contactIcon}
        >
          Sorgu Yönetimi
          <SubMenu style={this.getStyle('liste')}>
            <LeftMenuItem to="/Sorgularim" icon={iconSms}>
              Yeni Oluştur
            </LeftMenuItem>

            <LeftMenuItem to="/Listelerim" icon={iconEmail}>
              Kayıtlı Sorgularım
            </LeftMenuItem>
          </SubMenu>
        </LeftMenuItem>

        <LeftMenuItem
          onClick={() => this.handleHover('sistem')}
          icon={iconSettings}
        >
          Sistem Yönetimi
          <SubMenu style={this.getStyle('sistem')}>
            <LeftMenuItem to="/Smpp" icon={iconSmpp}>
              SMPP Bağlantıları
            </LeftMenuItem>

            <LeftMenuItem to="/Listelerim" icon={iconBell}>
              Sistem Mesajları
            </LeftMenuItem>

            <LeftMenuItem to="/Listelerim" icon={contactIcon}>
              Kullanıcı Yönetimi
            </LeftMenuItem>

            <LeftMenuItem to="/Listelerim" icon={iconSystem}>
              Sistem Durumu
            </LeftMenuItem>
          </SubMenu>
        </LeftMenuItem>

        <LeftMenuItem to="/Raporlarim" icon={iconBoard}>
          Raporlar
        </LeftMenuItem>

        <LeftMenuItem to="/Duyurular" icon={smsIcon}>
          Duyurular
        </LeftMenuItem>

        <LeftMenuItem to="/Yardim" icon={iconSettings}>
          Yardım
        </LeftMenuItem>
      </div>
    );
  }
}

export default withStyles(s)(LeftMenu);
