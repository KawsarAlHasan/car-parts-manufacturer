import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ManageProduct = ({ part, index }) => {
  const navigate = useNavigate();
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

  const handleViewAndEdit = (id) => {
    navigate(`viewandedit/${id}`);
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
        <button
          className="btn btn-primary btn-sm"
          onClick={() => handleViewAndEdit(_id)}
        >
          {" "}
          View and Edit
        </button>
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
