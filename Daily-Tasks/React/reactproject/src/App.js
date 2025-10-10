import LoginPage from "./Task/TaskLogin";
import Home from "./Task/home";
import ProtectedRoute from "./Task/protected";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";

function App(){
  function RedirectToLogin() {
  Cookies.remove("sessionToken");
  return <Navigate to="/LoginPage" />;
}
  return(
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<RedirectToLogin/>}/>
      <Route path="/LoginPage" element={<LoginPage/>}/>
      <Route path="/Home" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
      </Routes> 
    </BrowserRouter>
  )
}
export default App


// import CLass1 from './Class1';
// import Function1 from './Function1';
// import Login from './Login';
// import Car from './Car';
// import Lifecycle from './Lifecycle';
// import Parent from './PropsChildren';
// import Movies from './Mapping';
// import Form from './Forms';
// import Formsmultiple from './Formsmultiple';
// import MyForm from './checkbox';
// import Radio from './Radio';
// import { Suspense,lazy } from 'react';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// import Parentclass from './parent';
// import Search from './Search';
// import UseEff from './UseEff';
// import Sustrans from './suspenceTransition';
// import Button from './button';
// import ToggleSwitch from './ToggleSwitch';
// import TodoApp from './todo';
// import LoginForm from './UserLogin';
// import LiveInput from './Livetext';
// import RandomColorButton from './randomcolour';
// import UsernameStorage from './localstorage';
// import SessionLogin from './sessionstorage';
// import Component1 from './UseContext';
// import CookieUsername from './cookies';

// const Carss=lazy(()=>import('./Lazy'));
// const MyFruits = lazy(() => import('./Suspence')); 

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function About() {
//   return <h1>About Page</h1>;
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }
// function App(){

//     return(
//       <CookieUsername/>

      // <BrowserRouter>
      //           <div>

      // <nav>
      //   <Link to="/">Home</Link> |{" "}
      //   <Link to="/about">About</Link> |{" "}
      //   <Link to="/contact">Contact</Link>
      // </nav>
      // <a href="/about" target="_blank" rel="noopener noreferrer">About</a>

      // <Routes>
      //   <Route path="/" element={<Home />} />
      //   <Route path="/about" element={<About />} />
      //   <Route path="/contact" element={<Contact />} />
      // </Routes>
      //   <Suspense fallback={<div>Loading...</div>}>Using Lazy
      //     <Carss/>
      //   </Suspense>
      //   <Suspense fallback={<div>Loading...</div>}>
      //     <MyFruits/>
      //   </Suspense>
      //   <CLass1/>
      //   <Function1 name="Counter"/>
      //   <Login />
      //   <Car brand="Ford" model="Mustang" color="red" year={1969} />
      //   <Lifecycle newcolor="yellow"/>
      //   <Parent/>
      //   <Movies/>
      //   <Form/>
      //   <Formsmultiple/>
      //   <MyForm/>
      //   <Radio/>
      //   <Parentclass/>
      //   <Search/>
      //   <UseEff/>
      //   <Sustrans/>
      //   <Button text="Clickme"/>
      //   <ToggleSwitch/>
      //   <TodoApp/>
      //   <LoginForm/><br></br>
      //   <LiveInput/>
      //   <RandomColorButton/>
      //   {/* <UsernameStorage/>
      //   <SessionLogin/>
      //    <Component1/> */}
      // </div>
      //     </BrowserRouter>
//     );
//   }
// export default App;









// import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';

// function Home() {
//   return <h1>Home Page</h1>;
// }

// function Products() {
//   return (
//     <div>
//       <h1>Products Page</h1>
//       <nav style={{ marginBottom: '20px' }}>
//         <Link to="/products/car">Cars</Link> |{" "}
//         <Link to="/products/bike">Bikes</Link>
//       </nav> 
//       <Outlet /> 
//     </div>
//   );
// }

// function CarProducts() {
//   return (
//     <div>
//       <h2>Cars</h2>
//       <ul>
//         <li>Audi</li>
//         <li>BMW</li>
//         <li>Volvo</li>
//       </ul>
//     </div>
//   );
// }

// function BikeProducts() {
//   return (
//     <div>
//       <h2>Bikes</h2>
//       <ul>
//         <li>Yamaha</li>
//         <li>Suzuki</li>
//         <li>Honda</li>
//       </ul>
//     </div>
//   );
// }

// function Contact() {
//   return <h1>Contact Page</h1>;
// }

// function App() {
//   return (
//     <BrowserRouter>
//       {/* Navigation */}
//       <nav>
//         <Link to="/">Home</Link> |{" "}
//         <Link to="/products">Products</Link> |{" "}
//         <Link to="/contact">Contact</Link>
//       </nav>

//       {/* Routes */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/products" element={<Products />}>
//           <Route path="car" element={<CarProducts />} />
//           <Route path="bike" element={<BikeProducts />} />
//         </Route>
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App
