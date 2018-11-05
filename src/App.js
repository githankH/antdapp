import React, { Component } from 'react';
import Logo from './logo.svg' ;
import './App.css';

import {Layout, Menu, Icon, Breadcrumb} from 'antd';
import MenuItem from 'antd/lib/menu/MenuItem';

const {SubMenu} = Menu;
const {Header, Content, Footer, Sider} = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
          <Header className='header'>
               <div className='logo' />
               <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']} style={{lineHeight:'64px'}}>
               <Menu.Item key='1'>Nav 1</Menu.Item>
               <Menu.Item key='2'>Nav 2</Menu.Item>
               <Menu.Item key='3'>Nav 3</Menu.Item>
               </Menu>
          </Header>
          <Content style={{padding:'0px 48px'}}>
              <Breadcrumb style={{margin:'20px 5px'}}>
                  <Breadcrumb.Item > Home </Breadcrumb.Item> 
                  <Breadcrumb.Item> List </Breadcrumb.Item> 
                  <Breadcrumb.Item> App </Breadcrumb.Item> 
              </Breadcrumb>
              <Layout style={{ padding: '16px 0', background: '#fff' }}>
                  <Sider style={{width:'20%', background: '#fff'}}>
                      <Menu mode='inline' defaultSelectedKeys={['1','10']} defaultOpenKeys={['sub1','sub3']} style={{height:'100%'}}>
                      <SubMenu key='sub1' title={<span><Icon type='user' />SubNav-1 User</span>}>
                      <Menu.Item key="1">option1</Menu.Item>
                          <Menu.Item key="2">option2</Menu.Item>
                          <Menu.Item key="3">option3</Menu.Item>
                          <Menu.Item key="4">option4</Menu.Item>
                      </SubMenu>
                      <SubMenu key='sub2' title={<span><Icon type='laptop' />SubNav-2 Laptop</span>}>
                      <Menu.Item key="5">option5</Menu.Item>
                          <Menu.Item key="6">option6</Menu.Item>
                          <Menu.Item key="7">option7</Menu.Item>
                          <Menu.Item key="8">option8</Menu.Item>
                      </SubMenu>
                      <SubMenu key='sub3' title={<span><Icon type='notification' />SubNav-3 Notify</span>}>
                          <Menu.Item key="9">option9</Menu.Item>
                          <Menu.Item key="10">option10</Menu.Item>
                          <Menu.Item key="11">option11</Menu.Item>
                          <Menu.Item key="12">option12</Menu.Item>
                      </SubMenu>                                            
                      </Menu>
                  </Sider>
                  <Content style={{ padding: '0 24px'}}>
                          Content
                  </Content>
              </Layout>
          </Content>
          <Footer style={{textAlign: 'center'}}>
              Ant Designed by Hank @2018-11
          </Footer>
      </Layout>
  
      </div>
    );
  }
}

export default App;
