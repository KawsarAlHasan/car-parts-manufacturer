import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";

function AddCategory() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    fetch(
      "https://manufacturer-website-server-side-l833.onrender.com/category",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`Category added is successful`);
          refetch();
        } else {
          toast.error(`oh no! Category added is not successful`);
        }
      });
  };

  const {
    data: category,
    isLoading,
    refetch,
  } = useQuery("category", () =>
    fetch(
      "https://manufacturer-website-server-side-l833.onrender.com/category"
    ).then((res) => res.json())
  );

  const handleProduct = (id) => {
    navigate(`subcategory/${id}`);
  };

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://manufacturer-website-server-side-l833.onrender.com/category/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast(`Category Delete Successfully`);
            window.location.reload(false);
          } else {
            toast.error(`oh no! Category not Delete Successfully`);
          }
        });
    }
  };

  return (
    <div>
      <h1 className="my-4 text-center">
        ADD <span className="text-danger"> CATEGORY </span>
      </h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-3">
          <div>
            <Form.Control
              type="text"
              placeholder="Category Name"
              {...register("category", { required: "category is required" })}
            />
            {errors.category && (
              <p className="text-danger">{errors.category?.message}</p>
            )}
          </div>
          <div>
            <input
              className="btn btn-primary"
              value="Add Category"
              type="submit"
            />
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            category?.map((ctg) => (
              <tr key={ctg._id}>
                <td>{ctg.category}</td>
                <td>
                  <button
                    onClick={() => handleProduct(ctg._id)}
                    className="btn btn-sm btn-primary"
                  >
                    Sub Category
                  </button>
                </td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(ctg._id)}
                  >
                    Delete Category
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default AddCategory;
