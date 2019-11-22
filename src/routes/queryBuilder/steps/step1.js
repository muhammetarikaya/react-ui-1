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
import s from '../QueryBuilder.css';
import TurkcellButton from '../../../components/Button/Button';

class Step1 extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    sendType: PropTypes.number.isRequired,
    handleSendTypeChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <div className={s.stepContainer}>

        <TextField  floatingLabelText="Müşteri"/><br />
        <TextField floatingLabelText="Sipariş No"/><br />
        <TextField floatingLabelText="Gönderim Adı"/><br />
        <TextField type="number" floatingLabelText="Gönderim Limiti"/><br />
        <DatePicker floatingLabelText="Gönderim Zamani"/><br />

        <SelectField floatingLabelText="Mesaj Türü" onChange={this.props.handleSendTypeChange} value={this.props.sendType}>
          <MenuItem value={1} primaryText="SMS" />
          <MenuItem value={2} primaryText="Email" />
          <MenuItem value={3} primaryText="ZIM" />
          <MenuItem value={4} primaryText="IVR" />
        </SelectField><br />


        <TurkcellButton>
          İleri
      </TurkcellButton>
      </div>
    );
  }
}

export default withStyles(s)(Step1);
