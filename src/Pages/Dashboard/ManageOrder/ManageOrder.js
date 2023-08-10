import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";

function ManageOrder() {
  const navigate = useNavigate();

  const { data: manageOrders, isLoading } = useQuery("manageOrders", () =>
    fetch("https://manufacturer-server-side.onrender.com/manageOrders").then(
      (res) => res.json()
    )
  );

  const handleViewOrder = (id) => {
    navigate(`vieworder/${id}`);
  };
  return (
    <div>
      <h1 className="my-4 text-center">
        Manage <span className="text-danger"> Order </span>
      </h1>

      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th>INVOICE NO</th>
            <th>ORDER TIME</th>
            <th>CUSTOMER NAME</th>
            <th>METHOD</th>
            <th>AMOUNT</th>
            <th>STATUS</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading></Loading>
          ) : (
            manageOrders?.map((manageOrder) => (
              <tr>
                {console.log(manageOrder)}
                <td>5534</td>
                <td>{manageOrder.orderFormattedDate}</td>
                <td>{manageOrder.userName}</td>
                <td>Cash</td>
                <td>{manageOrder.totalAmount}</td>
                <td>Pending</td>

                <td>
                  <button
                    onClick={() => handleViewOrder(manageOrder._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default ManageOrder;
