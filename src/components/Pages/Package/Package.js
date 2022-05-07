import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import "./Package.css";
import Col from 'react-bootstrap/Col'

const Package = (props) => {
  const { img, name, description, price, quantity, spName, _id } = props.vegetable;
  const navigate = useNavigate();
  const go = id => {
    navigate(`/vegetable/${id}`)
  }
  return (
    <Col className="my-5 text-center" sm={12} md={6} lg={4}>

      <Card style={{ height: "450px", borderRadius: "25px" }} className="mx-1  shadow">
        <div className="text-center">
          <Card.Img
            style={{ width: "300px", height: "200px", margin: '20px 0' }}
            variant="top"
            src={img}
          />
        </div>
        <div style={{ backgroundColor: "#1FAA59", borderRadius: "25px" }}>
          <Card.Body style={{ marginTop: "30px" }}>
            <Card.Title className="text-uppercase fs-2">{name}</Card.Title>
            <Card.Title className='fs-4'>Price: {price} TK</Card.Title>
            <Card.Title className='fs-4'>Supplier Name:{spName}</Card.Title>
            <Card.Title className='fs-4'>Quantity: {quantity} KG</Card.Title>
            <Card.Text className='fs-4'>{description.slice(0, 50)}...</Card.Text>
            <button className="fs-2" style={{ margin: "5px", padding: "10px", backgroundColor: "#FF6263", borderRadius: "25px", color: "#120E43", width: "40%" }} onClick={() => go(_id)}>Update</button>

          </Card.Body>
        </div>
      </Card>

    </Col>
  );
};

export default Package;

