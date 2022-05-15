import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Component/pages/SignUp';

import ForgetPassword from './Component/pages/ForgetPassword';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import Login from './Component/pages/Login';
import LandingPage from './Component/pages/LandingPage';
import UserList from "./Component/Dashboard/userList/UserList";
import RegisterUser from "./Component/Dashboard/userList/RegisterUser";
import ProductList from "./Component/Dashboard/productList/ProductList";
import RegisterProduct from "./Component/Dashboard/productList/RegisterProduct";
import Home from './Component/Dashboard/home/Home';
import Transfer from './Component/Dashboard/wallet/Transfer';
import CategoryList from './Component/Dashboard/categoryList/CategoryList';
import RegisterCategory from './Component/Dashboard/categoryList/RegisterCategory';
import EditUser from './Component/Dashboard/userList/EditUser';
import EditProduct from './Component/Dashboard/productList/EditProduct';
import EditCategory from './Component/Dashboard/categoryList/EditCategory';
import Deposit from './Component/Dashboard/wallet/Deposit';
import Trf from './Component/Dashboard/wallet/Tf';
import ViewCategory from './Component/Dashboard/categoryList/ViewCategory';
import ViewProduct from './Component/Dashboard/productList/ViewProduct';

export default function App() {
  return (
    
    <Router>  
      {/* <Weather/> */}
      
      <Routes>
      
        <Route path="/" element={<LandingPage />}/>
        <Route path="/sign-in" element={<Login />}/>
        <Route path="/sign-up" element={<Register/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/dashboard" element={<Home />}/> 

        {/* user */}
        <Route path="/dashboard/users" element={<UserList />}/>
        <Route path="/dashboard/users/registerUser" element={<RegisterUser />}/> 
        <Route path="/dashboard/users/:id" element={<EditUser />}/>

        {/* products list */}
        <Route path="/dashboard/products" element={<ProductList/>}/>
        <Route path="/dashboard/products/registerproduct" element={<RegisterProduct/>}/>
        <Route path="/dashboard/products/:id" element={<EditProduct/>}/>  

        <Route path="/dashboard/wallet" element={<Transfer/>}/>
        <Route path="/dashboard/deposit" element={<Deposit/>}/>
        <Route path="/dashboard/trf" element={<Trf/>}/>
        
        {/* products category */}
        <Route path="/dashboard/categorylist" element={<CategoryList/>}/>
        <Route path="/dashboard/categorylist/registercategory" element={<RegisterCategory/>}/>
        <Route path="/dashboard/categorylist/:id" element={<EditCategory/>}/>
        <Route path="/dashboard/products/view" element={<ViewProduct/>}/>

      </Routes>
    </Router>
  );
}


