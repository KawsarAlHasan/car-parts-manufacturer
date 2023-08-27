import { Route, Routes } from "react-router-dom";
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
// import MiniNavbar from "./Pages/Shared/Header/MiniNavbar";
// import Test from "./Test";
import Pants from "./Pages/category/Pants";

function App() {
  return (
    <div>
      {/* <Test /> */}
      <div>
        <Header></Header>
      </div>

      {/* <MiniNavbar></MiniNavbar> */}

      <div className="c-mt">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>

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
          <Route path="/pants/pants" element={<Pants />}></Route>

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

            <Route path="manageOrders" element={<ManageOrder />}></Route>
            <Route
              path="manageOrders/vieworder/:orderId"
              element={<ViewOrder />}
            ></Route>

            <Route path="addParts" element={<AddParts></AddParts>}></Route>
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
