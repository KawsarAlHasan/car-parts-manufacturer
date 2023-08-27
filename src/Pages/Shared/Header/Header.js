import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  InputGroup,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import Logo from "../../../images/20230722_163020.png";
import searchImage from "../../../images/search-512.png";
import heart from "../../../images/icon/heart-regular.svg";
import cart from "../../../images/icon/cart-shopping-solid.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import UseParts from "../Hooks/UseParts";
import SearchProducts from "./SearchProducts";

const Header = (props) => {
  const [parts, isLoading] = UseParts();
  const [searchValue, setSearchValue] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [user] = useAuthState(auth);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      const url = `http://localhost:5000/addToCard?email=${user?.email}`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getMyOrders();
  }, [user]);

  const onSubmit = (data) => {
    const key = data.name;
    let lowercaseValue = key.toLowerCase();
    const products = (
      <div className="container">
        <div className="product-container-main">
          {parts
            .filter(
              (part) =>
                part.name.toLowerCase().includes(lowercaseValue) ||
                part.category.toLowerCase().includes(lowercaseValue) ||
                part.age.toLowerCase().includes(lowercaseValue) ||
                part.gender.toLowerCase().includes(lowercaseValue) ||
                part.availability.toLowerCase().includes(lowercaseValue)
            )
            .map((part) => (
              <div className="" key={part._id}>
                {console.log(part)}
                <SearchProducts part={part}></SearchProducts>
              </div>
            ))}
        </div>
      </div>
    );
    setSearchValue(products);
  };

  return (
    <div className="sticky-element">
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="99"
              height="35"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Form inline onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search Product"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    {...register("name", { required: "required" })}
                  />
                  <Button type="submit">
                    <img
                      style={{ height: "21px", width: "21px" }}
                      src={searchImage}
                      alt=""
                    />
                  </Button>
                </InputGroup>
              </Form>

              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">
                    ALL PRODUCTS
                  </a>
                </li>
              </ul>

              {user && (
                <>
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a
                        title="Wish List"
                        className="nav-link"
                        href="/wishlist"
                      >
                        <img
                          style={{
                            height: "30px",
                            width: "30px",
                          }}
                          src={heart}
                          alt=""
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        title="My Cart"
                        className="nav-link custom-relative"
                        href="/addtocard"
                      >
                        <img
                          style={{
                            height: "30px",
                            width: "30px",
                          }}
                          src={cart}
                          alt=""
                        />
                        <p className="navbar-indicator">
                          {myOrders?.length === 0 ? 0 : myOrders?.length}
                        </p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a
                        title="My Profile"
                        className="nav-link"
                        href="/dashboard"
                      >
                        <img
                          style={{
                            borderRadius: "15px",
                            height: "30px",
                            width: "30px",
                          }}
                          src={user?.photoURL || profile}
                          alt=""
                        />
                      </a>
                    </li>
                  </ul>
                </>
              )}
              {!user && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/LOGIN">
                      LOGIN
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {searchValue ? <div className="fixed-element">{searchValue}</div> : ""}
    </div>
  );
};

export default Header;
