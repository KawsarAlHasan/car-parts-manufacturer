import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Shared/Login/Login";
import Register from "./Pages/Shared/Login/Register";
import RequireAuth from "./Pages/Shared/Login/RequireAuth";
import Purchase from "./Pages/Purchase/Purchase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "./Pages/Dashboard/AllUsers/AllUsers";
import AddParts from "./Pages/Dashboard/AddParts/AddParts";
import ManageProducts from "./Pages/Dashboard/ManageProducts/ManageProducts";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import AllProducts from "./Pages/AllProducts/AllProducts";
import ViewAndEdit from "./Pages/Dashboard/ManageProducts/ViewAndEdit";
import AddToCard from "./Pages/AddToCard/AddToCard";
import MyOrder from "./Pages/Dashboard/MyOrders/MyOrder";
import ManageOrder from "./Pages/Dashboard/ManageOrder/ManageOrder";
import ViewOrder from "./Pages/Dashboard/ManageOrder/ViewOrder";
import WishList from "./Pages/wishList/WishList";
import Clothes from "./Pages/category/Clothes";
import SubCategory from "./Pages/subCategory/SubCategory";
import MiniNavber from "./Pages/Shared/Header/MiniNavber";
import AddCategory from "./Pages/Dashboard/AddCategory/AddCategory";
import AddSubCategory from "./Pages/Dashboard/AddCategory/AddSubCategory";
import { useState } from "react";
import SearchProducts from "./Pages/Shared/searchProducts/SearchProducts";
import MenuIcon from "./component/MenuIcon";
import UpComing from "./Pages/Dashboard/upComing/UpComing";
// import Test from "./Test";

function App() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (searchTerm) => {
    setInputValue(searchTerm);
    if (searchTerm.length >= 0) {
      navigate("/search-products");
    }
  };
  return (
    <div>
      <div>
        <Header onSearch={handleSearch}></Header>
      </div>
      <MenuIcon />
      <div>
        <MiniNavber />

        {/* <Test></Test> */}

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>
          <Route
            path="search-products"
            element={<SearchProducts inputValue={inputValue}></SearchProducts>}
          ></Route>

          <Route
            path="/purchase/:purchaseId"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/myOrder/:orderId"
            element={
              <RequireAuth>
                <MyOrder></MyOrder>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/wishlist"
            element={
              <RequireAuth>
                <WishList />
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/addtocard"
            element={
              <RequireAuth>
                <AddToCard />
              </RequireAuth>
            }
          ></Route>
          <Route path="/products" element={<AllProducts></AllProducts>}></Route>

          {/* clothes start */}
          <Route path="/clothes" element={<Clothes />}></Route>
          <Route path="/clothes/:subcategory" element={<SubCategory />}></Route>
          {/* clothes end */}

          {/* dashboard */}
          <Route
            path="/dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route index element={<MyProfile></MyProfile>}></Route>
            <Route path="myOrders" element={<MyOrders></MyOrders>}></Route>
            <Route path="upComingItems" element={<UpComing />}></Route>

            <Route path="manageOrders" element={<ManageOrder />}></Route>
            <Route
              path="manageOrders/vieworder/:orderId"
              element={<ViewOrder />}
            ></Route>

            <Route path="addParts" element={<AddParts></AddParts>}></Route>
            <Route path="addCategory" element={<AddCategory />}></Route>
            <Route
              path="addCategory/subcategory/:subCategoryId"
              element={<AddSubCategory />}
            ></Route>
            <Route path="users" element={<AllUsers></AllUsers>}></Route>
            <Route path="manageProducts" element={<ManageProducts />}></Route>
            <Route
              path="manageProducts/viewandedit/:productsId"
              element={<ViewAndEdit />}
            ></Route>
          </Route>

          <Route path="/*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
