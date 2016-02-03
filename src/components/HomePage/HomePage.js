

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './HomePage.scss';


const peterVijeh = [
  {
    name : 'Programming Languages',
    content: [
      'JavaScript (ES6)', 
      'PHP',
      'HTML',
      'CSS (SCSS, CSS3, PostCSS, BEM)' 
    ], 
    visible: false
  },
  {
    name : 'Libraries & Frameworks',
    content : [
      'React.js',
      'jQuery',
      'PostCSS',
      'SCSS', 
      'LoopBack.js',
      'StrongLoop',
      'Flux',
      'Express.js',
      'Node.js',
      'WordPress',
      'Boostrap'
    ], 
    visible: false
  },
    {
      name : 'Databases, Operating Systems & Servers', 
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
      name : 'Development Tools', 
      content : [
        'Git',
        'Vim',
        'Sublime Text',
        'Chrome Developer Tools',
        'NPM',
        'Homebrew',
        'Grunt.js',
        'Gulp.js',
        'webpack',
        'Babel',
      ], 
      visible: false
    },
    {
      name : 'Projects', 
      content : [
        { description: 'Peter Vijeh personal website',
          repo : 'https://github.com/pvijeh/peter-vijeh-personal-site',
          technologies : 'React.js, PostCSS, JSX, JavaScript, PM2, Ubuntu Linux, Node.js'
        },
        { description: 'Rent affordability calculator built with React.js and Reflux',
          url : 'http://movingtonewyorkguide.com/tools/how-much-rent-calculator/',
          repo : 'https://github.com/pvijeh/reactjs_rent_affordability_calculator',
          technologies : 'React.js, CSS, Reflux, Grunt.js, HTML, JSX, JavaScript'
        }, 
        { description: 'REST API built using LoopBack.js & StrongLoop (currently under development)',
          url : 'http://104.131.179.151:3001/explorer/',
          repo : 'https://github.com/pvijeh/places-api', 
          technologies : 'Express.js, Ubuntu Linux Server, PostgreSQL, StrongLoop, LoopBack.js, Node.js, REST, JavaScript'
        },
        { 
          description: 'Isomorphic React.js Local Discovery Web App (currently under development)',
          url : 'n/a',
          repo : 'https://github.com/pvijeh/isomorphic-react-local-discovery',
          technologies : 'JavaScript (ES6), React.js, Express.js, Flux, PostCSS, Ubuntu Linux Server, Node.js, JSX'
        }, 
        {
          description: 'NYC neighborhood comparison web application using third party API data',
          url : 'http://www.movingtonewyorkguide.com/NabeGrid/',
          technologies : 'HTML, PHP, JavaScript, jQuery, MySQL, Third Party APIs (Google, StreetEasy, NYC.gov), CSS'
        },
      { 
        description: 'Design and development of Serial Metrics website and blog',
        url : 'http://serialmetrics.com/', 
        technologies : 'HTML, PHP, JavaScript, jQuery, MySQL, CSS, Wordpress'
      }
      ],
      visible: false
    },
    {
      name : 'Professional Experience', 
        content: [{ resume : 'https://s3.amazonaws.com/petervijeh-personal/peterVijeh-developerResume.pdf',
        }],
      visible: false
    }
], 
title = 'Peter Vijeh - NYC Based Web Developer',
name = 'Peter Vijeh',
description = 'NYC based front end web developer with experience across the full stack', 
jObject =  'skillsAndExperience'; 

class LevelTwoObject extends Component {

  handleClick = event => {
    this.props.onClick(event);
  }; 

  render(){

        let jsonItems = [],
        objLenth = this.props.item.length,
        count = 0; 

        if (typeof this.props.item != 'undefined' ){
            this.props.item.forEach((item) =>{
              ++count; 
              if (typeof item === 'string'){

                jsonItems.push(<li key={count}><span className={s.objectStyle}>{item}</span>
                    {(()=>{ if (count < objLenth) return <span>,</span> })()}
                  </li>);     
              
              } else if (typeof item === 'object'){
                jsonItems.push(
                  <li key={count}>
                  <div className={s.array+' '+s.object}>
                      <ul>
                        {(()=>{if (item.description) return <li>{'Description : '}<span className={s.objectStyle}>{item.description}</span>,</li>})()}
                        {(()=>{if (item.url) return <li>{'URL : '}<a href={item.url}>{'project link'}</a>,</li>})()}
                        {(()=>{if (item.repo) return <li>{'Github Repo : '}<a href={item.repo}>{'link'}</a>,</li>})()}
                        {(()=>{if (item.technologies) return <li>{'Technologies : '}<span className={s.objectStyle}>{item.technologies}</span></li>})()}
                        {(()=>{if (item.resume) return <li>{'Resume : '}<a href={item.resume}>{'download'}</a>,</li>})()}
                      </ul>
                    </div>
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
          <div className={s.array}>
          {(()=>{
            if (this.props.visible === true){
              return <ul className={s.objectContent}>{jsonItems}</ul>
          } else if (this.props.visible === false) {
            return <span className={s.firstLevelLabel} onClick={this.handleClick}>...</span>
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
            jsonItems.push(<li className={s.firstLevelListItem} key={count}><span className={s.firstLevelLabel} onClick={this.handleClick.bind(this, {item, count})}>{item.name+' : '}</span><LevelTwoObject onClick={this.handleClick.bind(this, {item, count})} key={count} item={item.content} visible={item.visible}/>{
              (()=>{
                  if (count < objLenth) return <span>,</span>
              })()
            }</li>); 
          }); 
        }

    return(
          <div className={s.array+' '+s.topLevelObject}>
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
        <section className={s.section}>
          <div className={s.container}>
            <div className={s.containerInner}>
              <h1>{name}</h1>
              <h2>{description}</h2>
            </div>
          </div>
        </section>
        <section className={s.section}>
          <div className={s.container +' '+s.containerNarrow}>
            <div className={s.containerInner}>
              <span className={s.objectLabel}><span className={s.orangeText}>{'const '}</span>{jObject}<span className={s.orangeText}>{' = '}</span></span>{<LevelOneObject item={this.state.item} onClick={this.handleClick}/>}
            </div>
          </div>
        </section>
        <section className={s.section}>
        <div className={s.container}>
            <div className={s.containerInner}>
              <h3>{'Currently seeking full-time and contract web development opportunities'}</h3>
              <p>{'email : pvijeh (at) gmail.com '}</p>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default withStyles(HomePage, s);
