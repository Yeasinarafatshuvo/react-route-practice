import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Contact from "./component/pages/Contact";
import Navbar from "./component/Navbar";
import Post from "./component/pages/Post";
import Dashboard from "./component/pages/Dashboard";
import Login from "./component/pages/Login";
import Logout from "./component/pages/Logout";
function App() {
  let isLogged = true;
  let data = {
    st: "User not logged In",
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<h1>Hello react router</h1>} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post/:category/:id" element={<Post />} />
          <Route
            path="/dashboard"
            element={
              isLogged ? (
                <Dashboard />
              ) : (
                <Navigate to="/login" replace state={data} />
              )
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<h1>Error 404!! page not found!!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
