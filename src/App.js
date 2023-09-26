import {Routes, Route} from "react-router-dom"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer"
import Login from "./pages/Login/Login"
import User from "./pages/User/User";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<User />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
