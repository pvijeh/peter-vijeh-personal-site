/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.scss';
import Link from '../Link';

class Footer extends Component {

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a className={s.link} href="https://github.com/pvijeh/peter-vijeh-personal-site/blob/master/src/components/HomePage/HomePage.js">{'Built with isomorphic react.js - view code'}</a>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="https://github.com/pvijeh/">{'GitHub'}</a>
          <span className={s.spacer}>·</span>
          <a className={s.link} href="https://www.linkedin.com/in/peter-vijeh-41168a5
">LinkedIn</a>
          <span className={s.spacer}>·</span>
          <span className={s.text}>{'Hosted on Digital Ocean'}</span>
        </div>
      </div>
    );
  }

}

export default withStyles(Footer, s);
