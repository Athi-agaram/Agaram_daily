import LoginPage from "./Task/TaskLogin";
// import MiniDrawer from "./Task/homets";
import ProtectedRoute from "./Task/protected";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import HomePage from "./Task/home";


function App(){
  function RedirectToLogin() {
  Cookies.remove("sessionToken");
  return <Navigate to="/LoginPage" />;
}
  return(
    <BrowserRouter basename="/reactapp">
      <Routes>
      <Route path="/" element={<RedirectToLogin/>}/>
      <Route path="/LoginPage" element={<LoginPage/>}/>
      <Route path="/Home" element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
      {/* <Route path="/Home" element={<ProtectedRoute><MiniDrawer/></ProtectedRoute>}/> */}
      </Routes> 
    </BrowserRouter>
  )
}
export default App


