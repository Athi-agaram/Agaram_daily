import LoginPage from "./Task/TaskLogin";
import ProtectedRoute from "./Task/protected";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./Task/home";
import Component1 from "./Components/Component1";
import Component2 from "./Components/Component2";
import Component3 from "./Components/Component3";

function App() {
  function RedirectToLogin() {
    return <Navigate to="/LoginPage" />;
  }

  return (
    <BrowserRouter basename="/reactapp">
      <Routes>
        <Route path="/" element={<RedirectToLogin />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        
        <Route path="/Home" element={<ProtectedRoute><HomePage /></ProtectedRoute>}>
          <Route path="Component1" element={<Component1 />} />
          <Route path="Component2" element={<Component2 />} />
          <Route path="Component3" element={<Component3 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
