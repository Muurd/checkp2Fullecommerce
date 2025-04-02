import Addproductform from "./pages/Addproductform";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/addproduct" element={<Addproductform/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
