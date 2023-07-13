import React from "react";
import { toast } from "react-toastify";

const ManageProduct = ({ part, index }) => {
  const { _id, name, img, quantity } = part;

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `http://localhost:5000/carParts/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          window.location.reload(false);
          toast("Parts Item Delete Successfully!");
        });
    }
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <img
          style={{ borderRadius: "30px", height: "50px", width: "60px" }}
          src={img}
          alt=""
        />
      </td>
      <td>{name}</td>

      <td>{quantity}</td>
      <td>
        <button className="btn btn-primary btn-sm">Edit</button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDelete(_id)}
        >
          Parts Delete
        </button>
      </td>
    </tr>
  );
};

export default ManageProduct;
