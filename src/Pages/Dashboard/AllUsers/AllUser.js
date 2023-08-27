import React from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const AllUser = ({ user }) => {
  const { email } = user;

  const handleMakeAdmin = (id) => {
    fetch(`https://manufacturer-server-side.onrender.com/users/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successful.");
          window.location.reload(false);
        }
      });
  };

  return (
    <tr>
      <td>{email}</td>
      <td>
        {user?.role === "admin" ? (
          <Button disabled={true} size="sm">
            Make Admin
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleMakeAdmin(user._id)}
          >
            Make Admin
          </Button>
        )}
      </td>
      <td>
        <Button variant="danger" size="sm">
          Delete User
        </Button>
      </td>
    </tr>
  );
};

export default AllUser;
