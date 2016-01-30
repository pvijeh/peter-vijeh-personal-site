/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';

const PeterVijeh = [
  {
    name : 'Programming Languages',
    content: [
      'JavaScript (ES6)', 
      'PHP',
      'HTML',
      'CSS (SCSS)' 
    ]
  },
  {
    name : 'Libraries Frameworks & Tools',
    content : [
      'React.js',
      'jQuery',
      'PostCSS',
      'Flux',
      'Babel',
      'Express.js',
      'Node.js',
      'NPM',
      'Git',
      'Wordpress',
      'webpack',
      'Grunt.js',
      'Gulp.js'
    ], 
  },
    {
      name : 'Databases Operating Systems & Servers', 
      content : [
        'PostgreSQL',
        'MySQL',
        'Ubuntu Linux',
        'Amazon Web Services',
        '*nix Command Line',
        'OSX',
        'Linux Server Setup & Administration'
      ]
    },
    {name : 'Projects', 
      content : [
        { description: 'Lorem ipsum dolor sit amet, consectetur.',
        url : 'http://www.google.com',
        repo : 'http://www.github.com'}, 
        { description: 'Lorem ipsum dolor sit amet, consectetur.',
        url : 'http://www.google.com',
        repo : 'http://www.github.com'}
      ]
    }
]; 

const title = 'Let = ';

class LevelTwoObject extends Component {

  render(){

        let jsonItems = [];
        let comma = ','; 

        if (typeof this.props.item != 'undefined' ){
            this.props.item.forEach((item) =>{
              console.log(item); 
            jsonItems.push(<li>{comma}</li>); 
          }); 
        }

    return(
          <div className={s.object}>
            <ul className={s.objectContent}>
              {jsonItems}
            </ul>
          </div>
      );     
  }

}

class LevelOneObject extends Component {

  render(){

        let jsonItems = [];
        let comma = 'f'

        if (typeof PeterVijeh != 'undefined' ){
          
            PeterVijeh.forEach(function(item){
            jsonItems.push(<li><b> {item.name} : </b><LevelTwoObject item={item.content} /></li>); 
          }); 
        }

    return(
          <div className={s.object}>
            <ul className={s.objectContent}>
              
              {jsonItems}
            
            </ul>
          </div>
      ); 
  }
}

class HomePage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}{<LevelOneObject/>}</h1>
        </div>
      </div>
    );
  }

}

export default withStyles(HomePage, s);
