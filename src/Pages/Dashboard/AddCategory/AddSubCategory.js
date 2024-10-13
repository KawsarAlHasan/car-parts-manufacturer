import React, { useEffect, useState } from "react";
import Loading from "../../Shared/Loading/Loading";
import { useParams } from "react-router-dom";
import { Button, Form, Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddSubCategory() {
  const { subCategoryId } = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [ctgry, setCategory] = useState([]);

  const categoryname = ctgry?.category;

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://manufacturer-website-server-side-y96m.vercel.app/category/${subCategoryId}`
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
  } = useForm();

  const onSubmit = async (data) => {
    const result = {
      subcategory: data.subcategory,
      category: ctgry.category,
    };
    fetch(
      "https://manufacturer-website-server-side-y96m.vercel.app/subcategory",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(result),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast(`Sub Category added is successful`);
          window.location.reload(false);
        } else {
          toast.error(`oh no! Sub Category added is not successful`);
        }
      });
  };

  const [subcategory, setSubCategory] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://manufacturer-website-server-side-y96m.vercel.app/subcategory/search?category=${categoryname}`
    )
      .then((res) => res.json())
      .then((data) => {
        setSubCategory(data);
        setIsLoading(false);
      });
  }, [categoryname]);

  if (isLoading) {
    return <Loading />;
  }

  const handleDelete = (id) => {
    console.log(id);
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://manufacturer-website-server-side-y96m.vercel.app/subcategory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast(`Sub Category Delete Successfully`);
            window.location.reload(false);
          } else {
            toast.error(`oh no! Sub Category not Delete Successfully`);
          }
        });
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
                  >
                    Delete Sub Category
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
