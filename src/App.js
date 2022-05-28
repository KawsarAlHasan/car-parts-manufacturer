import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Login from './Pages/Shared/Login/Login';
import Register from './Pages/Shared/Login/Register';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import RequireAuth from './Pages/Shared/Login/RequireAuth';
import Purchase from './Pages/Purchase/Purchase';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import AddReview from './Pages/Dashboard/AddReview';
import AllUsers from './Pages/Dashboard/AllUsers/AllUsers';
import AddParts from './Pages/Dashboard/AddParts/AddParts';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='myPortfolio' element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path='blogs' element={<Blogs></Blogs>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='register' element={<Register></Register>}></Route>

        <Route path='/purchase/:purchaseId' element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }></Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='addReview' element={<AddReview></AddReview>}></Route>
          <Route path='addParts' element={<AddParts></AddParts>}></Route>
          <Route path='users' element={<AllUsers></AllUsers>}></Route>
          <Route path='manageProducts' element={<ManageProducts></ManageProducts>}></Route>
        </Route>

        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
