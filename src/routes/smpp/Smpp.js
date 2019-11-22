/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { Table, Button, Icon, Divider, Col, Row, Tooltip, Modal } from 'antd';
import NewConnectionForm from './newconnection';

import s from './Smpp.css';

const data = [
  {
    Id: '1',
    connectionName: 'SMSC1-GW1',
    group: 'group1',
    ip: '192.168.69.5',
    port: 5101,
    username: 'turkcell-1',
    limit: 50,
    status: true,
  },
  {
    Id: '2',
    connectionName: 'SMSC1-GW2',
    group: 'group1',
    ip: '192.168.69.9',
    port: 5101,
    username: 'turkcell-2',
    limit: 60,
    status: true,
  },
  {
    Id: '3',
    connectionName: 'SmsCarrierEU',
    group: 'group1',
    ip: '213.158.112.40',
    port: 3342,
    username: 'turkcell-1',
    limit: 40,
    status: false,
  },
  {
    Id: '4',
    connectionName: 'SmsCarrierEU2',
    group: 'group2',
    ip: '213.158.112.40',
    port: 3342,
    username: 'turkcell-1',
    limit: 30,
    status: true,
  },
];

class Smpp extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
    ModalText: 'Content of the modal',
    visible: false,
    confirmLoading: false,
  };
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  render() {
    const { visible, confirmLoading, ModalText } = this.state;

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'ID',
        dataIndex: 'Id',
        key: 'Id',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'id' && sortedInfo.order,
      },
      {
        title: 'Bağlantı Adı',
        dataIndex: 'connectionName',
        key: 'connectionName',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
      },
      {
        title: 'Grup',
        dataIndex: 'group',
        key: 'group',
        filters: [
          { text: 'Group 1', value: 'grup1' },
          { text: 'Group 2', value: 'grup2' },
        ],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: 'IP',
        dataIndex: 'ip',
        key: 'ip',
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: 'Port',
        dataIndex: 'port',
        key: 'port',
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: 'Kullanıcı Adı',
        dataIndex: 'username',
        key: 'username',
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: 'Limit',
        dataIndex: 'limit',
        key: 'limit',
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
      },
      {
        title: 'Durum',
        key: 'status',
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        render: (text, record) => (
          <span>
            <Tooltip placement="topLeft" title="Bağlantıyı Aç/Kapa">
              <Button text="Bağlantıyı Aç/Kapa" icon="link" type="primary" />
            </Tooltip>

            <Tooltip placement="topLeft" title="Düzenle">
              <Button text="Düzenle" icon="edit" type="prima" />
            </Tooltip>

            <Tooltip placement="topLeft" title="Sil">
              <Button text="Sil" icon="delete" type="danger" />
            </Tooltip>
          </span>
        ),
      },
    ];
    return (
      <div>
        <div className={s.tableOperations}>
          <Button onClick={this.clearAll}>Filtreleri Temizle</Button>

          <Button
            type="primary"
            icon="plus"
            className={s.rightMenu}
            onClick={this.showModal}
          >
            Yeni Bağlantı Ekle
            <Modal
              title="Title"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
            >
              <NewConnectionForm />
            </Modal>
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={data}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default withStyles(s)(Smpp);
