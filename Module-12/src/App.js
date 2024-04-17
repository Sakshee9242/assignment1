import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Products from './Component/Products';
import Contact from './Component/Contact';
import Header from './Component/Header';
import LoginForm from './Component/LoginForm';
import ErrorPage from './Component/ErrorPage';
import SinglePage from './Component/SinglePage';
import Cart from "./Component/Cart";
import { createContext, useContext, useState } from 'react';


// for login page 
export const UserLogin = createContext()

function App() {

const [loginuser, setloginuser] = useState()
const [logoutuser, setlogoutuser] = useState(false)
  return (
    <div className="App">
       <BrowserRouter>
       <UserLogin.Provider value={{loginuser,setloginuser,logoutuser, setlogoutuser}}  />
       <Header />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<LoginForm />}></Route>
        <Route path='*' element={<ErrorPage />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/singleproduct/:id' element={<SinglePage />}></Route>

       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
