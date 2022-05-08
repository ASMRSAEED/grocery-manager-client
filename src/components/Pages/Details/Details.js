import { toast, ToastContainer } from 'react-toastify'
import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css'
import { useParams } from 'react-router-dom';
import "./Details.css";

const Details = () => {

  const { id } = useParams();
  const [vegetable, setVegetable] = useState({})
  let { img, name, price, description, spName, quantity } = vegetable;


  useEffect(() => {
    const url = `https://sheltered-basin-32707.herokuapp.com/vegetable/${id}`
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then((data) => setVegetable(data));
  }, [])


  const delivered = () => {
    let Remaining = parseFloat(+vegetable.quantity) - 1
    let newInventory = { img, name, price, quantity: Remaining, description, spName }
    setVegetable(newInventory)


    fetch(`https://sheltered-basin-32707.herokuapp.com/vegetable/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newInventory),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(data => {
        toast("Delivered Successful")
      })
  }


  const restock = (e) => {
    e.preventDefault();
    let updatedQuantity = parseFloat(+vegetable.quantity) + parseFloat(e.target.upQuantity.value);
    let newInventory = { img, name, price, quantity: updatedQuantity, description, spName }
    setVegetable(newInventory)


    fetch(`https://sheltered-basin-32707.herokuapp.com/vegetable/${id}`, {
      method: 'PUT',
      body: JSON.stringify(newInventory),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then(data => {
        e.target.reset()
        toast("Item Added")
      })
  }


  return (
    <div>
      <h2 className="heading">ITEM DETAILS</h2>

      <div className="row_container">
        {<div className="col-md-4 ms-4">
          <img style={{ width: '90%', height: '100%' }} src={vegetable?.img} alt="" />
        </div>}

        <div className="item-details col-md-6">
          <h3>Product Name: {vegetable?.name}</h3>
          <h4>Supplier Name: {vegetable?.spName}</h4>
          <h4>Price: ${vegetable?.price}</h4>
          <h4>Quantity: {vegetable?.quantity}</h4>
          <h4>Description: {vegetable?.description}....</h4>
        </div>
      </div>
      
      <div className="manage-btn">
        <button onClick={() => delivered(quantity)} className="delivered_btn">Delivered</button>
        <br />
        <h4>RESTOCK ITEM</h4>
        <br />
        <form onSubmit={restock} >
          <p className="quantity"><input name="upQuantity" type="number" placeholder="INPUT QUANTITY" /></p>
          <button className="restock_btn">Add now</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;