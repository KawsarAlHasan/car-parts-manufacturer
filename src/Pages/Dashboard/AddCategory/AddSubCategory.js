import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { useParams } from "react-router-dom";
import { Button, Form, Spinner, Table } from "react-bootstrap";
import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddSubCategory() {
  const [addCategoryLoading, setAddSubCategoryLoading] = useState(false);
  const [deleteSubCategoryLoading, setDeleteSubCategoryLoading] =
    useState(false);
  const { subCategoryId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [ctgry, setCategory] = useState([]);

  const categoryname = ctgry?.category;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://two-start-manufacturer-backend.vercel.app/category/${subCategoryId}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
        setIsLoading(false);
      });
  }, [subCategoryId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const submitData = {
      subcategory: data.subcategory,
      category: ctgry.category,
    };

    setAddSubCategoryLoading(true);
    try {
      const response = await fetch(
        "https://two-start-manufacturer-backend.vercel.app/subcategory",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(submitData),
        }
      );
      await response.json();

      toast.success("Sub Category added successfully");
    } catch (error) {
      toast.error("oh no! Sub Category added is not successful");
    } finally {
      reset();
      refetch();
      setAddSubCategoryLoading(false);
    }
  };

  const {
    data: subcategory,
    isLoading: subIsLoading,
    refetch,
  } = useQuery(["subcategory", categoryname], async () => {
    const res = await fetch(
      `https://two-start-manufacturer-backend.vercel.app/subcategory/search?category=${categoryname}`
    );
    return res.json();
  });

  if (isLoading || subIsLoading) {
    return <Loading />;
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      setDeleteSubCategoryLoading(true);
      try {
        const response = await fetch(
          `https://two-start-manufacturer-backend.vercel.app/subcategory/${id}`,
          {
            method: "DELETE",
          }
        );
        await response.json();
        toast.success(`Sub Category Delete Successfully`);
      } catch (error) {
        toast.error(`oh no! Sub Category not Delete Successfully`);
      } finally {
        refetch();
        setDeleteSubCategoryLoading(false);
      }
    }
  };

  return (
    <div>
      <h1 className="my-4 text-center">
        Category Name:
        <span className="text-danger"> {categoryname} </span>
      </h1>

      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex mb-3">
          <div>
            <Form.Control
              type="text"
              placeholder="Sub Category Name.."
              {...register("subcategory", {
                required: "Sub Category is required",
              })}
            />
            {errors.subCategory && (
              <p className="text-danger">{errors.subCategory?.message}</p>
            )}
          </div>
          <div>
            <button
              className="btn btn-primary"
              type="submit"
              disabled={addCategoryLoading}
            >
              {addCategoryLoading ? "Adding..." : "Add Category"}
            </button>
          </div>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
      </form>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sub Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <Loading />
          ) : (
            subcategory.map((sCtg) => (
              <tr key={sCtg._id}>
                <td>{sCtg.subcategory}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(sCtg._id)}
                    disabled={deleteSubCategoryLoading === sCtg._id}
                  >
                    {deleteSubCategoryLoading === sCtg._id ? (
                      <Spinner size="sm" animation="border" />
                    ) : (
                      "Delete Sub Category"
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

export default AddSubCategory;
