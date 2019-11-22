import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './Button.css';

class TurkcellButton extends React.Component {
  static props = {
    children: PropTypes.node.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func,
  };

  handleClick = event => {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    event.preventDefault();
  };

  render() {
    return (
      <div onClick={this.handleClick} className={s.blueAddBtn}>
        <div className={s.icon}
          style={{backgroundImage: 'url('+this.props.icon+')'}}
        />
        <div className={s.text}>{this.props.children}</div>
      </div>
    );
  }
}

export default withStyles(s)(TurkcellButton);
