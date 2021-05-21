import React from "react";
import { Badge, Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const { Header, Content, Footer } = Layout;
const LayOut = (props) => {
  return (
    <Layout className="layout">
      <Header style={{ marginBottom: "15px" }}>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">
            <Link to="/">Products</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="3" style={{ float: "right" }}>
            Cart
            <Badge
              style={{ position: "absolute", top: "-25px", right: "-20px" }}
              count={props.cart.length}
              showZero
            ></Badge>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <div className="site-layout-content">{props.children}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

const mapStateToProps = (state) => {
  return { cart: state.app.cart };
};
export default connect(mapStateToProps)(LayOut);
