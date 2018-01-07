import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'antd/dist/antd.css'

import PartnersUI from './components/PartnersUI'
import RoofersUI from './components/RoofersUI'
import AccommodationsUI from './components/AccommodationsUI'
import HomelessUI from './components/HomelessUI'

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class App extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
      <Router>
          <Layout>
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
            >
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>

                <Menu.Item key="1">
                  <Link to="/">
                    <Icon type="user" />
                    <span className="nav-text">Partners</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/accommodations">
                    <Icon type="video-camera" />
                    <span className="nav-text">Accommodations</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/roofers">
                    <Icon type="user" />
                    <span className="nav-text">Roofers</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/homeless">
                    <Icon type="user" />
                    <span className="nav-text">Homeless</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
              </Header>
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <Route exact path="/" component={PartnersUI}/>
                  <Route exact path="/accommodations" component={AccommodationsUI}/>
                  <Route path="/roofers" component={RoofersUI}/>
                  <Route path="/homeless" component={HomelessUI}/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Roof ©2018 Created by LoB
              </Footer>
            </Layout>
          </Layout>
        </Router>
    );
  }
}

export default App
