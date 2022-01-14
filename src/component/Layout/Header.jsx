import React, { PropTypes } from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';

function Header({ location }) {
  return (
    <Menu
      selectedKeys={[location.pathname]}
      mode="horizontal"
    >
      <Menu.Item key="/">
        <Link to="/"><Icon type="home" />主应用 Home</Link>
      </Menu.Item>
      <Menu.Item key="/micro-vue3/about">
        <Link to="/micro-vue3/about"><Icon type="setting" />子应用 About</Link>
      </Menu.Item>
    </Menu>
  );
}

Header.propTypes = {
  location: PropTypes.object,
};

export default Header;
