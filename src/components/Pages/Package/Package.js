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

    <Col className="my-5 text-center">
      <div className='shadow' style={{ backgroundColor: "#f9f4f4", borderRadius: "25px", width: "400px", height: "750px" }}>
        <Card.Img className='card-images' src={img} />
        <Card.Body className='card-top'>
          <Card.Title className="text-uppercase"><b>{name}</b></Card.Title>
          <Card.Title><b>Price:</b> {price} TK</Card.Title>
          <Card.Title><b>Supplier Name:</b> {spName}</Card.Title>
          <Card.Title><b>Quantity:</b> {quantity} KG</Card.Title>
          <br />
          <Card.Text className='card-bottom'>{description.slice(0, 250)}...</Card.Text>

        </Card.Body>
        <button className='update-btn' onClick={() => go(_id)}>Update</button>
      </div>
    </Col>
  );
};



export default Package;

