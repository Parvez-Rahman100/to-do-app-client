import './App.css';
import NavBar from './Components/Shared/NavBar';
import Footer from './Components/Shared/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import NotFound from './Components/Shared/NotFound';
import CompletedTask from './Components/CompletedTask/CompletedTask';
import Calander from './Components/Calander/Calander';
import ToDo from './Components/Todo/ToDo';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/todo' element={<ToDo/>}></Route>
        <Route path='/completed' element={<CompletedTask/>}></Route>
        <Route path='/calander' element={<Calander/>}></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
      
    </div>
  );
}

export default App;
