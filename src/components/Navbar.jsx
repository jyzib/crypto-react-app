import React from 'react';
import { Button, Avatar, Menu, Typography } from 'antd';
import { Link } from 'react-router-dom';
import img from '../images/user.png';
import { HomeOutlined, FundOutlined } from '@ant-design/icons';

const { Item } = Menu;

const Navbar = () => {
  return (
    <div className='navbar-contener'>
      <div className="logo-container">
        <Avatar src={img} />
        <Typography.Title level={2} className='logo' >
          <Link to='/'>Yatharthriti</Link>
        </Typography.Title>
      </div>
      <Menu theme='dark'>
        <Item key={1} icon={<HomeOutlined />}>
          <Link to={'/'}>Home</Link>
        </Item>
        <Item key={2} icon={<FundOutlined />}>
          <Link to={'/Currencies'}>Curency</Link>
        </Item>
        <Item key={3} icon={<FundOutlined />}>
          <Link to={'/exchanges'}>Exchange</Link>
        </Item>
        <Item key={4} icon={<FundOutlined />}>
          <Link to={'/news'}>News</Link>
        </Item>
      </Menu>
    </div>
  );
};

export default Navbar;
