import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Single from "./pages/Single";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute";


const Layout =()=>{
    return <>
       <Navbar/>
       <Outlet/>
       <Footer/>
    </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/write",
        element: (<PrivateRoute><Write /></PrivateRoute>)
      },
      {
        path: "/post/:id",
        element: (<PrivateRoute><Single /></PrivateRoute>)
      },
    ]
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  }

]);
function App() {
  return (
    <>
      <div >
        <RouterProvider router={router}></RouterProvider>
      </div>
    </>
  );
}

export default App;
