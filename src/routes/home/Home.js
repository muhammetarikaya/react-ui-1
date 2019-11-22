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
import { Col, Row } from 'antd';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import s from './Home.css';

//
const data = [
  { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

class Home extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <Row>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <BarChart
                compact
                height={100}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#3fb0e8" />
                <Bar dataKey="uv" fill="#ffe000" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <LineChart
                compact
                data={data}
                margin={{ top: 6, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#ffe000"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#4d4d4d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <LineChart
                compact
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#ffe000"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#4d4d4d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <BarChart
                compact
                height={100}
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#3fb0e8" />
                <Bar dataKey="uv" fill="#ffe000" />
              </BarChart>
            </ResponsiveContainer>
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <LineChart
                compact
                data={data}
                margin={{ top: 6, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#ffe000"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#4d4d4d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
          <Col xs={{ span: 8 }} lg={{ span: 8 }}>
            <ResponsiveContainer width="100%" aspect={6.0 / 4.0}>
              <LineChart
                compact
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="pv"
                  stroke="#ffe000"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="uv" stroke="#4d4d4d" />
              </LineChart>
            </ResponsiveContainer>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withStyles(s)(Home);
