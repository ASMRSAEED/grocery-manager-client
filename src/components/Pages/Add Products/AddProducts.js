
import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import "./AddProducts.css";
import 'react-toastify/dist/ReactToastify.css'

const AddProducts = () => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch('https://sheltered-basin-32707.herokuapp.com/vegetable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log("success", data);
        toast('Item Successfully added')
        reset()
      })

  };
  return (
    <div className="add-service m-5">
      <h2 className="text-center" style={{ margin: '40px', color: 'white', fontSize: '40px' }}>INPUT ITEM DETAILS</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className="form-control"
          {...register("name", { required: true, maxLength: 20 })}
          placeholder="Item Name"
        />
        <input
          className="form-control"
          {...register("img")}
          placeholder="Image URL"
        />
        <textarea className="text" {...register("description")} placeholder=" Description" />
        <input
          className="form-control"
          type="number"
          {...register("price")}
          placeholder="Price"
        />
        <input
          className="form-control"
          type="text"
          {...register("spName")}
          placeholder="Supplier Name"
        />
        <input
          className="form-control"
          type="number"
          {...register("quantity")}
          placeholder="Quantity"
        />

        <input className="add_button" type="submit" />
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddProducts;