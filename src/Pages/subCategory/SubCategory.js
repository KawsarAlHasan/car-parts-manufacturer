import React, { useEffect, useState } from "react";
import { Accordion, Badge, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";

function SubCategory() {
  const { categoryId, subcategory } = useParams();
  const [searchValue, setSearchValue] = useState("");
  let lowercaseValue = searchValue.toLowerCase();
  const [isLoading, setIsLoading] = useState(false);

  const [products, setProducts] = useState([]);

  console.log(categoryId);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:5000/clothes?subCategory=${subcategory}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  }, [subcategory]);

  document.title = `${subcategory} || Two Star Fashion`;

  const handleSearch = (even) => {
    even.preventDefault();
  };
  const filterGenter = (even) => {
    even.preventDefault();
  };
  const filterAvailability = (even) => {
    even.preventDefault();
  };
  const filterAge = (even) => {
    even.preventDefault();
  };

  const filterProduct = (
    <>
      {/* gender */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Gender</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterGenter}>
              <div className="d-flex">
                <Form.Check
                  label="Men's"
                  name="group2"
                  type="radio"
                  value="men's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-101`}
                />
                <Form.Check
                  className="mx-3"
                  label="Women's"
                  name="group2"
                  type="radio"
                  value="women's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
              </div>
              <div className="d-flex">
                <Form.Check
                  label="Boy's"
                  name="group2"
                  type="radio"
                  value="boy's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
                <Form.Check
                  className="mx-3"
                  label="Girl's"
                  name="group2"
                  type="radio"
                  value="girl's"
                  onClick={(e) => setSearchValue(e.target.value)}
                  id={`inline-radio-102`}
                />
              </div>
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* age */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Age</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterAge}>
              <Form.Check
                label="Children"
                name="group2"
                type="radio"
                value="children"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-101`}
              />
              <Form.Check
                label="Young Man"
                name="group2"
                type="radio"
                value="young man"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-102`}
              />
              <Form.Check
                label="Old Man"
                name="group2"
                type="radio"
                value="old man"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-102`}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

      {/* Availability */}
      <Accordion className="mt-2" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <b>Availability</b>
          </Accordion.Header>
          <Accordion.Body>
            <form onSubmit={filterAvailability}>
              <Form.Check
                label="In Stock"
                name="group3"
                type="radio"
                value="in stock"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-201`}
              />
              <Form.Check
                label="Up Coming"
                name="group3"
                type="radio"
                value="up coming"
                onClick={(e) => setSearchValue(e.target.value)}
                id={`inline-radio-202`}
              />
            </form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );

  const navigate = useNavigate();
  const parchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div className="container">
      {/* search input */}
      <div className="row">
        <div className="col-7 col-lg-12">
          <Form
            className="py-3 d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <Form.Control
              type="search"
              placeholder={`Only ${subcategory} Search...`}
              className="w-75"
              aria-label="Search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </Form>
        </div>

        <div className="col-4  d-lg-none ">
          <div className="d-flex">
            <b style={{ marginTop: "20px", marginRight: "-10px" }}>Filter:</b>
            <Navbar
              style={{ marginTop: "5px" }}
              key="lg"
              expand="lg"
              className="bg-body-tertiary mb-3"
            >
              <Container fluid>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-lg`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                      Product Filter
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    {/* filter products */}
                    {filterProduct}
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" d-none d-lg-block col-lg-3">
          {/* filter products */}
          {filterProduct}
        </div>
        <div className="col-12 col-lg-9 ">
          <div className="parts-container">
            {isLoading ? (
              <>
                <Loading />
              </>
            ) : products.length === 0 ? (
              <h2 className="text-center">
                Sorry, we can not find this product 😞
              </h2>
            ) : (
              products
                .filter(
                  (product) =>
                    product.name.toLowerCase().includes(lowercaseValue) ||
                    product.age.toLowerCase().includes(lowercaseValue) ||
                    product.gender.toLowerCase().includes(lowercaseValue) ||
                    product.availability.toLowerCase().includes(lowercaseValue)
                )
                .map((product) => (
                  <div
                    onClick={() => parchase(product._id)}
                    className="shadow-lg card custom-card  pb-3"
                    style={{ borderRadius: "30px" }}
                  >
                    <img
                      style={{
                        borderRadius: "30px 30px  0 0",
                        height: "300px",
                      }}
                      src={product.img}
                      alt=""
                    />
                    <Badge className="discount" pill bg="primary">
                      Save:{" "}
                      <span style={{ fontSize: "15px", fontWeight: "1000" }}>
                        &#2547;
                      </span>
                      455
                    </Badge>
                    <div className="card-body ">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">
                        Price:
                        <b style={{ color: "#ef4a23", marginRight: "5px" }}>
                          <span className="taka">&#2547;</span>
                          {product.salePrice}
                        </b>
                        <span className="text-decoration-line-through">
                          {product.price}
                        </span>
                      </p>
                      <p className="card-text">
                        Available Quantity: {product.quantity}
                      </p>
                      <p className="card-text">
                        Minimum Order Quantity: {product.orderQuantity}
                      </p>
                    </div>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
