import React from "react";
import UseParts from "../../Shared/Hooks/UseParts";
import ManageProduct from "./ManageProduct";
import { Table } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";

const ManageProducts = (props) => {
  const [parts, isLoading] = UseParts();

  return (
    <div>
      <h1 className="text-center py-4">
        Manage<span className="text-danger"> Products</span>
      </h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            parts.map((part, index) => (
              <ManageProduct
                key={part._id}
                part={part}
                index={index}
              ></ManageProduct>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageProducts;
