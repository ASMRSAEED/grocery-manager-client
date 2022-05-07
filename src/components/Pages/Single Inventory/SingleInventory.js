import { Card, Col } from 'react-bootstrap';

const SingleInventory = ({ vegetable, inventoryDelete }) => {
  const { img, name, description, price, quantity, spName, _id } = vegetable;


  return (
    <Col className="my-5 text-center" sm={12} md={6} lg={4}>
      <Card style={{ height: "450px", borderRadius: "25px" }} className="mx-3 shadow-lg">
        <div className="text-center">
          <Card.Img
            style={{ width: "350px", height: "220px", margin: '20px 0' }}
            variant="top"
            src={img}
          />
        </div>
        <div style={{ backgroundColor: "#1FAA59", borderRadius: "25px" }}>
          <Card.Body style={{ marginTop: "5px" }}>
            <Card.Title className="text-uppercase fs-2"><b>{name}</b></Card.Title>
            <Card.Title className='fs-4'><b>Price:</b> {price} TK</Card.Title>
            <Card.Title className='fs-4'><b>Supplier Name:</b> {spName}</Card.Title>
            <Card.Title className='fs-4'><b>Quantity:</b> {quantity} KG</Card.Title>
            <Card.Text className='fs-4'>{description.slice(0, 50)}...</Card.Text>
            <button className="fs-2"
              style={{ margin: "5px", padding: "10px", backgroundColor: "#FF6263", borderRadius: "25px", color: "#120E43", width: "40%" }}
              onClick={() => inventoryDelete(_id)}><b>Delete</b></button>

          </Card.Body>
        </div>
      </Card>

    </Col>
  );
};

export default SingleInventory;