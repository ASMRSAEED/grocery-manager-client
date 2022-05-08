import { Card, Col } from 'react-bootstrap';
import './SingleInventory.css'

const SingleInventory = ({ vegetable, inventoryDelete }) => {
  const { img, name, description, price, quantity, spName, _id } = vegetable;


  return (

    <Col className="my-5 text-center" sm={12} md={6} lg={4}>
      <div className='shadow' style={{ backgroundColor: "#f9f4f4", borderRadius: "25px", width: "415px", height: "750px" }}>
        <Card.Img className='card-images' src={img} />
        <Card.Body className='card-top'>
          <Card.Title className="text-uppercase"><b>{name}</b></Card.Title>
          <Card.Title><b>Price:</b> {price} TK</Card.Title>
          <Card.Title><b>Supplier Name:</b> {spName}</Card.Title>
          <Card.Title><b>Quantity:</b> {quantity} KG</Card.Title>
          <br />
          <Card.Text className='card-bottom'>{description.slice(0, 250)}...</Card.Text>
        </Card.Body>
        <button className='update-btn' onClick={() => inventoryDelete(_id)}><b>Delete</b></button>
      </div>
    </Col>
  );
};

export default SingleInventory;