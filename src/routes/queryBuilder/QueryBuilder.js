/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import { Query, Builder, Preview, Utils } from 'react-awesome-query-builder';
import PropTypes from 'prop-types';
import { Card} from 'antd';

import withStyles from 'isomorphic-style-loader/lib/withStyles';
import StepWizard from './StepWizard';

const stringify = require('json-stringify-safe');
const Immutable = require('immutable');
const transit = require('transit-immutable-js');

const { queryBuilderFormat, queryString } = Utils;
import config from './config';
import s from './QueryBuilder.css';

/*
let ruleset = {
    "condition": "AND",
    "rules": [
        {
            "id": "name",
            "field": "name",
            "type": "string",
            "input": "text",
            "operator": "less",
            "value": "test name"
        },
        {
            "condition": "OR",
            "rules": [
                {
                    "id": "category",
                    "field": "date",
                    "type": "date",
                    "input": "date",
                    "operator": "equal",
                    "value": "2012-01-12"
                },
                {
                    "id": "category",
                    "field": "name",
                    "type": "string",
                    "input": "text",
                    "operator": "equal",
                    "value": "1"
                }
            ]
        }
    ]
}
*/

class QueryBuilder extends React.Component {
  getChildren(props) {
    const jsonStyle = {
      backgroundColor: 'darkgrey',
      margin: '10px',
      padding: '10px',
      fontSize: '9px',
    };
    return (
      <div style={{ padding: '10px' }}>
        <Card>
          <pre style={jsonStyle}>
            {stringify(queryString(props.tree, props.config, true), undefined, 2)}
          </pre>
        </Card>
        <Card>

          <Builder {...props} />
        </Card>
      </div>
    );
  }

  render() {
    const initValueJSON =
      '["~#iM",["type","group","id","9a99988a-0123-4456-b89a-b1607f326fd8","children1",["~#iOM",["a98ab9b9-cdef-4012-b456-71607f326fd9",["^0",["type","rule","id","a98ab9b9-cdef-4012-b456-71607f326fd9","properties",["^0",["field","num","operator","less","value",["~#iL",[2]],"valueSrc",["^2",["value"]],"operatorOptions",null,"valueType",["^2",["number"]]]]]]]],"properties",["^0",["conjunction","AND"]]]]';

    const { tree, ...config_props } = config;

    return (
      <div>
        <Query
          value={transit.fromJSON(initValueJSON)}
          {...config_props}
          get_children={this.getChildren}
        />
      </div>
    );
  }
}

export default withStyles(s)(QueryBuilder);
