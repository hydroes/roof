import React from 'react'

import { Provider } from 'react-redux';
import configureStore from 'store/configureStore'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import 'antd/dist/antd.css'

import Home from 'components/Home'
import About from 'components/About'
import Topics from 'components/Topics'
import Posts from 'containers/Posts'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

const style = `#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255,255,255,.2);
  margin: 16px;
}`

const store = configureStore()


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
      <Provider store={store}>
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
                    <span className="nav-text">Home</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="2">
                  <Link to="/topics">
                    <Icon type="video-camera" />
                    <span className="nav-text">Topics</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="3">
                  <Link to="/about">
                    <Icon type="user" />
                    <span className="nav-text">About</span>
                  </Link>
                </Menu.Item>

                <Menu.Item key="4">
                  <Link to="/posts">
                    <Icon type="user" />
                    <span className="nav-text">Posts</span>
                  </Link>
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }} />
              <Content style={{ margin: '24px 16px 0' }}>
                <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/topics" component={Topics}/>
                  <Route path="/posts" component={Posts}/>
                </div>
              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App
