import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { toast } from "react-toastify";

const AllUser = ({ user, refetchUsers }) => {
  const { email } = user;
  const [makeAdminLoading, setMakeAdminLoading] = useState(false);
  const [deleteAdminLoading, setDeleteAdminLoading] = useState(false);

  const handleMakeAdmin = async (id) => {
    setMakeAdminLoading(true);
    try {
      const res = await fetch(
        `https://two-start-manufacturer-backend.vercel.app/users/admin/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("Make admin successful.");
        refetchUsers();
      } else {
        toast.error(data.message || "Failed to make admin.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    }
    setMakeAdminLoading(false);
  };

  const handleDeleteAdmin = async (id) => {
    setDeleteAdminLoading(true);
    try {
      const res = await fetch(
        `https://two-start-manufacturer-backend.vercel.app/users/admin/delete/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        toast.success("Admin role removed.");
        refetchUsers(); // ইউজার লিস্ট রিফ্রেশ করুন
      } else {
        toast.error(data.message || "Failed to remove admin.");
      }
    } catch (error) {
      console.log(error);
      toast.error("An error occurred.");
    } finally {
      setDeleteAdminLoading(false);
    }
  };

  return (
    <tr>
      <td>{email}</td>
      <td>
        {user?.role === "admin" ? (
          <Button disabled size="sm">
            Make Admin
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleMakeAdmin(user._id)}
            disabled={makeAdminLoading}
          >
            {makeAdminLoading ? "Loading..." : "Make Admin"}
          </Button>
        )}
      </td>
      <td>
        {user?.role === "admin" ? (
          <Button
            variant="danger"
            size="sm"
            onClick={() => handleDeleteAdmin(user._id)}
            disabled={deleteAdminLoading}
          >
            {deleteAdminLoading ? "Loading..." : "Remove Admin"}
          </Button>
        ) : (
          <Button variant="danger" size="sm" disabled>
            Remove Admin
          </Button>
        )}
      </td>
    </tr>
  );
};

export default AllUser;
