import React, { useEffect, useState } from 'react';
import './ManageInventories.css'
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import SingleInventory from '../Single Inventory/SingleInventory';

const ManageInventories = () => {

  const [vegetables, setVegetables] = useState([])

  useEffect(() => {
    fetch('https://sheltered-basin-32707.herokuapp.com/vegetable')
      .then(res => res.json())
      .then(data => setVegetables(data))
  }, [])

  const inventoryDelete = id => {
    const proceed = window.confirm('Are You Sure To Delete This Item?')
    if (proceed) {
      const url = `https://sheltered-basin-32707.herokuapp.com/vegetable/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          if (data.deletedCount > 0) {
            Swal.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!",
            }).then((result) => {
              if (result.isConfirmed) {
                Swal.fire('Your file has been deleted');
              }
            });
            const remainingProducts = vegetables?.filter(
              (vegetable) => vegetable?._id !== id
            );
            setVegetables(remainingProducts);
          }
        })
    }
  }


  return (
    <div>
      <div>
        <Link to="/addProducts"> <button className="add-button">ADD ITEM</button></Link>
      </div>

      <h2 className='inv-text'>Manage Inventories</h2>
      <Container>
        <Row >
          {
            vegetables.map((vegetable) =>
            (<SingleInventory

              key={vegetable._id}
              vegetable={vegetable}
              inventoryDelete={inventoryDelete}

            ></SingleInventory>
            ))
          }
        </Row>
      </Container>
    </div>
  );
};

export default ManageInventories;