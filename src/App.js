import React, { Component } from 'react';
import {Layout, Navigation, Header, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import './App.css';

import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
          <Layout>
    <Header className= "header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/"> DreadHeadDev </Link>} scroll>
                  <Navigation>
                      <Link to="/About">About Me</Link>
                      <Link to="/Portfolio">Portfolio</Link>
                      <Link to="/BLog">Blog</Link>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/Contact">Contact</Link>
                  </Navigation>
              </Header>
              <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/"> DreadHeadDev </Link>}>
                  <Navigation>
                  <Link to="/About">About Me</Link>
                      <Link to="/Portfolio">Portfolio</Link>
                      <Link to="/BLog">Blog</Link>
                      <Link to="/Resume">Resume</Link>
                      <Link to="/Contact">Contact</Link>
                  </Navigation>
              </Drawer>
              <Content>
                  <div className="page-content" />
                  <Main />
              </Content>
          </Layout>
      </div>
    );
  }
}

export default App;
