import { Button, Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addCart, getProducts } from "../redux/actions/appActions";
const { Meta } = Card;

const Home = ({products, getProducts, addCart}) => {
  useEffect(() => {
    getProducts();
  }, [getProducts]);
  return (
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      {products.map((item, index) => (
        <Col
          key={index}
          className="gutter-row"
          style={{ marginBottom: "15px" }}
          span={6}
        >
          <Card hoverable cover={<img alt="example" src={item.image} />}>
            <p>{item.price}</p>
            <Meta title={item.name} description={item.detail} />
            <Button
              style={{ marginTop: "15px" }}
              onClick={() => addCart(item)}
            >
              Add to Cart
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.app.products,
  };
};

export default connect(mapStateToProps, { getProducts, addCart })(Home);
