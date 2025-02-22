import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import profile from "../../../images/profile-logo.png";
import Logo from "../../../images/20230722_163020.png";
import searchImage from "../../../images/search-512.png";
import heart from "../../../images/icon/heart-regular.svg";
import cart from "../../../images/icon/cart-shopping-solid.svg";
import axios from "axios";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ onSearch }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  const [user] = useAuthState(auth);

  const [myOrders, setMyOrders] = useState([]);

  useEffect(() => {
    const getMyOrders = async () => {
      const url = `https://two-start-manufacturer-backend.vercel.app/addToCard?email=${user?.email}`;
      const { data } = await axios.get(url);
      setMyOrders(data);
    };
    getMyOrders();
  }, [user]);

  const [isToggled, setIsToggled] = useState(false);

  const toggleButton = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className="sticky-element">
      <div className="c-w-100">
        <div className={` ${isSticky ? "sticky" : ""}`}>
          <div className="container">
            <nav className="c-navbar">
              <div className="c-navbar-brand">
                <Link to="/">
                  <img alt="" src={Logo} className="c-navbar-logo" />
                </Link>
              </div>
              <ul className="c-navbar-nav mt-3">
                {user && (
                  <>
                    <form
                      className="search-input-container mx-2 d-none d-md-block"
                      onSubmit={handleSubmit2}
                    >
                      <input
                        type="text"
                        placeholder="Search"
                        className="search-input"
                        value={searchTerm}
                        onChange={handleInputChange}
                      />

                      <img
                        className="search-icon"
                        style={{ height: "21px", width: "21px" }}
                        src={searchImage}
                        alt=""
                      />
                    </form>
                    <div className="d-md-none mx-2">
                      <img
                        onClick={toggleButton}
                        style={{ height: "30px", width: "30px" }}
                        src={searchImage}
                        alt=""
                      />
                    </div>
                    <li>
                      <Link
                        title="Wish List"
                        className="nav-link"
                        to="/wishlist"
                      >
                        <img
                          style={{
                            height: "30px",
                            width: "30px",
                          }}
                          src={heart}
                          alt=""
                        />
                      </Link>
                    </li>
                    <li className="">
                      <Link
                        title="My Cart"
                        className="nav-link custom-relative"
                        to="/addtocard"
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
                      </Link>
                    </li>
                    <li>
                      <Link
                        title="My Profile"
                        className="nav-link"
                        to="/dashboard"
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
                      </Link>
                    </li>
                  </>
                )}
                {!user && (
                  <>
                    <form
                      className="search-input-container mx-2 d-none d-md-block"
                      onSubmit={handleSubmit2}
                    >
                      <input
                        type="text"
                        placeholder="Search Products..."
                        className="search-input"
                        value={searchTerm}
                        onChange={handleInputChange}
                      />

                      <img
                        className="search-icon"
                        style={{ height: "21px", width: "21px" }}
                        src={searchImage}
                        alt=""
                      />
                    </form>

                    <div className="d-md-none mx-2">
                      <img
                        onClick={toggleButton}
                        style={{ height: "30px", width: "30px" }}
                        src={searchImage}
                        alt=""
                      />
                    </div>

                    <li>
                      <Link className="nav-link" to="/login">
                        LOGIN
                      </Link>
                    </li>
                    <li>
                      <Link className="nav-link" to="/register">
                        REGISTER
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </nav>
          </div>
          {isToggled && (
            <form
              className="search-input-container mx-2"
              onSubmit={handleSubmit2}
            >
              <input
                type="text"
                placeholder="Search Products..."
                className="search-input"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <img
                className="search-icon"
                style={{ height: "21px", width: "21px" }}
                src={searchImage}
                alt=""
              />
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
