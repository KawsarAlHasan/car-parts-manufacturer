import React from 'react'
import { toast } from 'react-toastify'

const MyOrder = ({ myOrder }) => {
  const { _id, parts, pImg, pPrice, userQuantity } = myOrder

  const handleDelete = (id) => {
    const proceed = window.confirm('Are you sure?')
    if (proceed) {
      const url = `https://manufacturer-server-side.onrender.com/purchase/${id}`
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload(false)
          toast('Parts Item Delete Successfully!')
        })
    }
  }

  return (
    <div className="shadow-lg rounded text-center pb-3">
      <h2>{parts}</h2>
      <img className="img-fluid" src={pImg} alt="" />
      <h6>Per Unit Price: $ {pPrice}</h6>
      <h6>Purchase Quantity: {userQuantity}</h6>
      <button onClick={() => handleDelete(_id)} className="btn btn-danger">
        Parts Delete
      </button>
    </div>
  )
}

export default MyOrder
