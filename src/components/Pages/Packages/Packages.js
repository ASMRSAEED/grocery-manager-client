import React from "react"
import { useEffect, useState } from "react";
import Package from "../Package/Package";
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row'

const Packages = () => {
  const [vegetable, setVegetable] = useState([]);
  useEffect(() => {
    fetch("https://sheltered-basin-32707.herokuapp.com/vegetable")
      .then((res) => res.json())
      .then((data) => setVegetable(data));
  }, []);
  
  
  return (
    <div style={{ marginTop: 40 }}>
      <h2 className="text-center heading">Packages</h2>
      <Container className="mb-5" >
        <Row>
          {vegetable.map((p) => (
            <Package key={p._id} vegetable={p}></Package>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Packages;