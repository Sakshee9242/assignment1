import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './Crud_With_Redux/Home';
import AddUser from './Crud_With_Redux/AddUser';
import ViewUser from './Crud_With_Redux/ViewUser';
import EditUser from './Crud_With_Redux/EditUser';
// import About from './About';



function App() {
  // const num = useSelector(state=> state.count.num)
  return (
    <div className="App">
    <BrowserRouter>
    <Link to='/'>Home</Link>
    <Routes>
     <Route path='/' element={<Home />}></Route>
     <Route path='/adduser' element={<AddUser />}></Route>
     <Route path='/viewuser/:id' element={<ViewUser />}></Route>
     <Route path='/edituser/:id' element={<EditUser />}></Route>
    </Routes>
    </BrowserRouter>

      {/* <h1>this app has {num}</h1>
      <Home />
      <About /> */}
    </div>
  );
}

export default App;
