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

import DataTables from 'material-ui-datatables';
import s from './Lists.css';
import Button from '../../components/Button/Button';

const TABLE_COLUMNS = [
  {
    key: 'listName',
    label: 'Liste Ismi',
    sortable: true
  },
  {
    key: 'listCount',
    label: 'Tahmini Hedef Sayisi',
    sortable: true
  },
  {
    key: 'createdDate',
    label: 'Olusturulma Tarihi',
    sortable: true
  }, {
    key: 'listQuery',
    label: 'Liste Sorgusu',
    sortable: true
  }, {
    key: 'usageCount',
    label: 'Kullanilma Sayisi',
    sortable: true
  },

  {
    key: 'lastUsage',
    label: 'Son Kullanim',
    sortable: true

  }, {
    key: 'listActions',
    label: '',
    render: function (name, all) {
      return (<div>
        <Button icon='edit'></Button>
        <Button icon='remove'></Button>
      </div>)
    }
  }
];

const TABLE_DATA = [
  {
    listName: 'Dolandirici Uyarisi',
    listCount: '159',
    createdDate: '6.0',
    listQuery: '24',
    usageCount: '10',
    listActions: '',
    lastUsage: '12/11/2018'
  },
  {
    listName: 'Bayram Mesaji',
    listCount: '159',
    createdDate: '6.0',
    listQuery: '24',
    usageCount: '10',
    listActions: '',
    lastUsage: '12/01/2018'


  }
];

class Lists extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };
  handleFilterValueChange = (value) => {
    // your filter logic
  }

  handleSortOrderChange = (key, order) => {
    // your sort logic
  }
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <DataTables
          height={'auto'}
          selectable={true}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          showCheckboxes={false}
          onCellClick={this.handleCellClick}
          onCellDoubleClick={this.handleCellDoubleClick}
          onFilterValueChange={this.handleFilterValueChange}
          onSortOrderChange={this.handleSortOrderChange}
          page={1}
          count={100}
        />
      </div>
    );
  }
}

export default withStyles(s)(Lists);
