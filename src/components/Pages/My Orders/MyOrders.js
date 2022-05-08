import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./MyOrders.css"


const MyOrders = () => {
  const [vegetables, setVegetables] = useState([])
  const navigate = useNavigate()
  const updateStock = (id) => {
    navigate(`/vegetable/${id}`)
  }
  useEffect(() => {
    fetch('https://sheltered-basin-32707.herokuapp.com/vegetable')
      .then(res => res.json())
      .then(data => setVegetables(data))
  }, [])

  const orderCancel = id => {
    const proceed = window.confirm('Are you sure you want to delete?')
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
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
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
    <>
      <div>
        <div className="py-5">
          <div className="container">
            <div>
              <Link to="/addProducts"> <button className='add-button'>ADD ITEM</button></Link>
            </div>
            <div className="mx-auto">
              <h2 className="heading">MY ITEMS</h2>
              <Table striped bordered responsive hover>
                <thead style={{ fontSize: "15px", textAlign: 'center', color: '#a8c4a8' }}>
                  <tr>
                    <th>PRODUCT ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>AVAILABLE QUANTITY</th>
                    <th>MANAGE ITEM</th>
                  </tr>
                </thead>
                <tbody className='item-table' style={{ fontSize: "15px", textAlign: 'center', color: '#a8c4a8' }}>
                  {vegetables.map((vegetable) => (
                    <tr key={vegetable._id}>
                      <td style={{ color: 'white' }}>{vegetable?._id}</td>
                      <td style={{ color: 'white' }}>{vegetable?.name}</td>
                      <td style={{ color: 'white' }}>{vegetable?.price}</td>
                      <td style={{ color: 'white' }}>{vegetable?.quantity}</td>
                      <td>
                        <div className="d-flex">
                          <button className='box-button-1' onClick={() => updateStock(vegetable?._id)}>Update Stock</button>
                          <button className='box-button-2' onClick={() => orderCancel(vegetable?._id)}>Delete Item</button></div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default MyOrders;