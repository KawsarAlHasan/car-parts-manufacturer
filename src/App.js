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

function App() {
  return (
    <div>
      <Header></Header>
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
        <Route path="/products" element={<AllProducts></AllProducts>}></Route>

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

          <Route path="addParts" element={<AddParts></AddParts>}></Route>
          <Route path="users" element={<AllUsers></AllUsers>}></Route>
          <Route
            path="manageProducts"
            element={<ManageProducts></ManageProducts>}
          ></Route>
          <Route
            path="manageProducts/viewandedit/:productsId"
            element={<ViewAndEdit></ViewAndEdit>}
          ></Route>
        </Route>

        <Route path="/*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
