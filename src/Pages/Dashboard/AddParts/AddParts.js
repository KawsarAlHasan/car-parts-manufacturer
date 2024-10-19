import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Form from "react-bootstrap/Form";
import { useQuery } from "react-query";
import LoadingButton from "../../../component/LoadingButton";

const AddParts = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedCategory, setSelectCategory] = useState("");
  const handleSelectCategory = (event) => {
    setSelectCategory(event.target.value);
  };

  const [selectedSubCategory, setSelectSubCategory] = useState("");
  const handleSubSelectCategory = (event) => {
    setSelectSubCategory(event.target.value);
  };

  const [isSubmitLoading, setIsSubmitLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitLoading(true);
    const image = data.image[0];

    const formData = new FormData();
    formData.append("file", image);

    formData.append("upload_preset", "v3hakopx");
    const url = "https://api.cloudinary.com/v1_1/daizkkv04/image/upload";
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.asset_id) {
          const parts = {
            name: data.name,
            category: data.category,
            subcategory: data.subcategory,
            email: data.email,
            quantity: data.quantity,
            price: data.price,
            productCode: data.productCode,
            salePrice: data.salePrice,
            orderQuantity: data.orderQuantity,
            description: data.description,
            gender: data.gender,
            age: data.age,
            size: data.size,
            customSize: data.customSize,
            colorfamily: data.colorfamily,
            cColorfamily: data.cColorfamily,
            brand: data.brand,
            availability: data.availability,
            img: imgData.secure_url,
          };
          console.log(parts);
          // save Product
          const url = `https://manufacturer-website-server-side-l833.onrender.com/carParts`;
          fetch(url, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(parts),
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          })
            .then((res) => res.json())
            .then((result) => {
              setIsSubmitLoading(false);
              window.location.reload(false);
              toast.success(`${data.name} is added successfully`);
            });
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

  const [subcategory, setSubCategory] = useState([]);
  const [isLoading2, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://manufacturer-website-server-side-l833.onrender.com/subcategory/search?category=${selectedCategory}`
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        setSubCategory(data);
        setIsLoading(false);
      });
  }, [selectedCategory]);

  const [user] = useAuthState(auth);
  return (
    <div>
      <div className="  my-3">
        <h1>
          Add <span className="text-danger">Product</span>
        </h1>
        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
          {/* products name  */}
          <Form.Group className="mb-3">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Product Name"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-danger">{errors.name?.message}</p>
            )}
          </Form.Group>

          {/* products image  */}
          <Form.Group className="mb-3">
            <Form.Label>Product Image</Form.Label>
            <Form.Control
              type="file"
              placeholder="Product Image"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && (
              <p className="text-danger">{errors.image?.message}</p>
            )}
          </Form.Group>

          {/* price */}
          <div className="d-flex">
            <Form.Group className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                {...register("price", { required: "Price is required" })}
              />
              {errors.price && (
                <p className="text-danger">{errors.price?.message}</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3 mx-2">
              <Form.Label>Sale Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Sale Price"
                {...register("salePrice", { required: "Price is required" })}
              />
              {errors.salePrice && (
                <p className="text-danger">{errors.salePrice?.message}</p>
              )}
            </Form.Group>
          </div>

          {/* quantity */}
          <div className="d-flex">
            <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Quantity"
                {...register("quantity", { required: "Quantity is required" })}
              />
              {errors.quantity && (
                <p className="text-danger">{errors.quantity?.message}</p>
              )}
            </Form.Group>

            <Form.Group className="mb-3 mx-2 ">
              <Form.Label>Order Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Order Quantity"
                {...register("orderQuantity", {
                  required: "Order Quantity is required",
                })}
              />
              {errors.orderQuantity && (
                <p className="text-danger">{errors.orderQuantity?.message}</p>
              )}
            </Form.Group>
          </div>

          {/* email */}
          <Form.Group className="d-none">
            <Form.Control
              type="email"
              value={user?.email}
              readOnly
              {...register("email")}
            />
            {errors.email && (
              <p className="text-danger">{errors.email?.message}</p>
            )}
          </Form.Group>

          {/* gender */}
          <Form.Group>
            <Form.Label>Gender</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Men's"
                name="group1"
                type="radio"
                value="Men's"
                id={`inline-radio-1`}
                {...register("gender", { required: true })}
              />
              <Form.Check
                inline
                label="Women's"
                name="group1"
                type="radio"
                value="Women's"
                id={`inline-radio-2`}
                {...register("gender", { required: true })}
              />
              <Form.Check
                inline
                label="Boy's"
                name="group1"
                type="radio"
                value="Boy's"
                id={`inline-radio-2`}
                {...register("gender", { required: true })}
              />
              <Form.Check
                inline
                label="Girl's"
                name="group1"
                type="radio"
                value="Girl's"
                id={`inline-radio-2`}
                {...register("gender", { required: true })}
              />
            </div>
          </Form.Group>

          {/*age and  product code  */}
          <div className="d-flex">
            {/* Age  */}
            <Form.Group className="mb-3">
              <Form.Label>Age</Form.Label>
              <Form.Select {...register("age", { required: true })}>
                <option value="Children">Children</option>
                <option value="Young Man">Young Man</option>
                <option value="Old Man">Old Man</option>
              </Form.Select>
            </Form.Group>

            {/* product code  */}
            <Form.Group className="mb-3 mx-2">
              <Form.Label>Product Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Product Code"
                {...register("productCode", {
                  required: "Product Code is required",
                })}
              />
              {errors.productCode && (
                <p className="text-danger">{errors.productCode?.message}</p>
              )}
            </Form.Group>
          </div>

          {/* category and sub category  */}
          <div className="d-flex">
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                {...register("category")}
                value={selectedCategory}
                onChange={handleSelectCategory}
              >
                <option value="">Select an Category</option>
                {category?.map((ctg) => (
                  <option key={ctg._id} value={ctg.category}>
                    {ctg.category}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mx-3">
              <Form.Label>Sub Category</Form.Label>
              <Form.Select
                {...register("subcategory")}
                value={selectedSubCategory}
                onChange={handleSubSelectCategory}
              >
                <option value="">Select an Sub Category</option>
                {subcategory?.map((sCtg) => (
                  <option key={sCtg._id} value={sCtg.subcategory}>
                    {sCtg.subcategory}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </div>

          {/* size  */}
          <Form.Group className="mb-3">
            <Form.Label>Size</Form.Label>
            <div className="row">
              <div className="col-4">
                <Form.Check
                  className="mx-2"
                  {...register("size")}
                  type="checkbox"
                  value="M"
                  label={"M"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("size")}
                  type="checkbox"
                  value="L"
                  label={"L"}
                />
              </div>
              <div className="col-4">
                <Form.Check
                  className="mx-2"
                  {...register("size")}
                  type="checkbox"
                  value="XL"
                  label={"XL"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("size")}
                  type="checkbox"
                  value="XXL"
                  label={"XXL"}
                />
              </div>
              <div className="col-4">
                <Form.Control
                  type="text"
                  placeholder="Custom Size Number"
                  {...register("customSize")}
                />
              </div>
            </div>
          </Form.Group>

          {/* color family */}
          <Form.Group className="mb-3">
            <Form.Label>Color Family</Form.Label>
            <div className="row">
              <div className="col-3">
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Red"
                  label={"Red"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Orange"
                  label={"Orange"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Green"
                  label={"Green"}
                />
              </div>
              <div className="col-3">
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Yellow"
                  label={"Yellow"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="White"
                  label={"White"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Black"
                  label={"Black"}
                />
              </div>
              <div className="col-3">
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Blue"
                  label={"Blue"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Gray"
                  label={"Gray"}
                />
                <Form.Check
                  className="mx-2"
                  {...register("colorfamily")}
                  type="checkbox"
                  value="Purple"
                  label={"Purple"}
                />
              </div>
            </div>
            <Form.Control
              className="w-50"
              type="text"
              placeholder="Custom Color..."
              {...register("cColorfamily")}
            />
          </Form.Group>

          {/* availability and brand  */}
          <div className="d-flex">
            {/* availability */}
            <Form.Group className="mb-3">
              <Form.Label>Availability</Form.Label>
              <Form.Select {...register("availability", { required: true })}>
                <option value="In Stock">In Stock</option>
                <option value="Up Coming">Up Coming</option>
              </Form.Select>
            </Form.Group>

            {/* brand */}
            <Form.Group className="mb-3 mx-2">
              <Form.Label>Brand Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Brand Name"
                {...register("brand")}
              />
            </Form.Group>
          </div>

          {/* description  */}
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Description"
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <p className="text-danger">{errors.description?.message}</p>
            )}
          </Form.Group>

          {errors.exampleRequired && <span>This field is required</span>}

          {isSubmitLoading ? (
            <LoadingButton />
          ) : (
            <input
              className="btn btn-primary"
              value="Add Product"
              type="submit"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default AddParts;
