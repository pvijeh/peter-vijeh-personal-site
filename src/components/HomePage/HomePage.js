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

const peterVijeh = [
{
  name: 'Description',
  content : [
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, iure!'
  ],
  visible: true
},
  {
    name : 'Programming Languages',
    content: [
      'JavaScript (ES6)', 
      'PHP',
      'HTML',
      'CSS (SCSS)' 
    ], 
    visible: false
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
    visible: false
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
      ], 
      visible: false
    },
    {
      name : 'Projects', 
      content : [
        { description: 'Lorem ipsum dolor sit amet, consectetur.',
        url : 'http://www.google.com',
        repo : 'http://www.github.com'}, 
        { description: 'Lorem ipsum dolor sit amet, consectetur.',
        url : 'http://www.google.com',
        repo : 'http://www.github.com'}
      ],
      visible: false
    }
]; 

const title = 'Peter Vijeh - NYC Based Web Developer';

const jObject = 'Const peterVijeh = '

class LevelTwoObject extends Component {

  render(){

        let jsonItems = [];
        let objLenth = this.props.item.length; 
        let count = 0; 

console.log(this.props.visible); 

        if (typeof this.props.item != 'undefined' ){
            this.props.item.forEach((item) =>{
              ++count; 
              if (typeof item === 'string'){

                jsonItems.push(<li>{item}
                    {
                      (()=>{
                          if (count < objLenth) return <span>,</span>
                      })()
                    }
                  </li>);     
              
              } else if (typeof item === 'object'){
                
                jsonItems.push(
                  <li>
                    <ul>
                      <li><span>description : {item.description},</span></li>
                      <li><span>url : {item.url},</span></li>
                      <li><span>repo : {item.repo}</span></li>
                    </ul>
                    {
                      (()=>{
                          if (count < objLenth) return <span>,</span>
                      })()
                    }
                  </li>
                  );     
              
              }
          }); 
        }

    return(
          <div className={s.object}>
          {(()=>{
            if (this.props.visible === true){
              return <ul className={s.objectContent}>{jsonItems}</ul>
          } else if (this.props.visible === false) {
            return <span className={s.objectHidden}>...</span>
          }
          })()}
          </div>
      );     
  }

}

class LevelOneObject extends Component {

  handleClick = event => {
    this.props.onClick(event);
  }; 

  render(){

        let jsonItems = [];
        let objLenth = this.props.item.length; 
        let count = 0; 

        if (typeof this.props.item != 'undefined' ){
          
            this.props.item.forEach((item)=>{
              ++count; 
              console.log(count);
            jsonItems.push(<li className={s.firstLevelListItem} key={count}><span className={s.firstLevelLabel} onClick={this.handleClick.bind(this, {item, count})}>{item.name} : </span> <LevelTwoObject item={item.content} visible={item.visible}/>{
              (()=>{
                  if (count < objLenth) return <span>,</span>
              })()
            }</li>); 
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

constructor (props) {
    super(props)
    this.state =  { 
      item: peterVijeh
    }
  }

  handleClick = event => {
    let clickedProp = this.state.item; 

    clickedProp[event.count - 1].visible = !clickedProp[event.count - 1].visible;

    this.setState({
      item : clickedProp
    });

    console.log(clickedProp[event.count].visible);

    console.log(event);
    console.log(this.state.item);



  }; 

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
          <span className={s.firstLevelLabel}>{jObject}</span>{<LevelOneObject item={this.state.item} onClick={this.handleClick}/>}
        </div>
      </div>
    );
  }

}

export default withStyles(HomePage, s);
