import React, { useState } from "react";
import { Button, Form, Table, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";
import { useNavigate } from "react-router-dom";

function AddCategory() {
  const [addCategoryLoading, setAddCategoryLoading] = useState(false);
  const [deleteCategoryLoading, setDeleteCategoryLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setAddCategoryLoading(true);
    try {
      const response = await fetch("http://localhost:8088/category", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      toast.success("Category added successfully");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      refetch();
      setAddCategoryLoading(false);
    }
  };

  const {
    data: category,
    isLoading,
    refetch,
  } = useQuery("category", () =>
    fetch("http://localhost:8088/category").then((res) => res.json())
  );

  const handleProduct = (id) => {
    navigate(`subcategory/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      setDeleteCategoryLoading(true);
      try {
        const response = await fetch(`http://localhost:8088/category/${id}`, {
          method: "DELETE",
        });
        const result = await response.json();
        toast.success("Category deleted successfully");
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        refetch();
        setDeleteCategoryLoading(false);
      }
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
            <Button
              type="submit"
              className="btn btn-primary"
              disabled={addCategoryLoading}
            >
              {addCategoryLoading ? (
                <Spinner size="sm" animation="border" />
              ) : (
                "Add Category"
              )}
            </Button>
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
                    disabled={deleteCategoryLoading === ctg._id}
                  >
                    {deleteCategoryLoading === ctg._id ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      "Delete Category"
                    )}
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
