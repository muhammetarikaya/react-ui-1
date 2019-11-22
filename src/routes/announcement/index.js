/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Announcement from './Announcement';
import Layout from '../../components/Layout';

async function action({ fetch }) {
  return {
    chunks: ['Announcement'],
    title: 'Duyurular',
    component: (
      <Layout>
        <Announcement news={''} />
      </Layout>
    ),
  };
}

export default action;
