import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Login from "../src/Components/Login/Login";
import Register from "../src/Components/Register/Register"
import Main from "./Layout/Main";
import Blog from '../src/Components/Blog/Blog'
import Category from './Components/Category'
import Details from "./Components/Details";
import WishList from "./Components/WishList";
import Order from "./Components/Order";
import AddProduct from "./Components/AddProduct";
import MyProducts from "./Components/MyProducts";
import  { Toaster } from 'react-hot-toast';
import Private from "./Private/Private";
import Catagories from "./Components/Catagories";
import AllSellers from "./Components/AllSellers";
import AllBuyers from "./Components/AllBuyers";
import Report from "./Components/Report";
import AdminPrivate from "./AdminPrivate/AdminPrivate";
import SellerPrivate from "./SellerPrivate/SellerPrivate";
import BuyerPrivate from "./BuyerPrivate/BuyerPrivate";
import NotFound from './Components/NotFound/NotFound'


function App() {
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/login", element: <Login></Login> },
        { path: "/register", element: <Register></Register> },
        { path: "/blog", element: <Blog></Blog> },
        { path: "/category/:model", element: <Private><Category></Category></Private> },
        { path: "/categorys", element: <Private><Catagories></Catagories></Private> },
        { path: "/details/:id", element: <Private><Details></Details></Private> },
        { path: "/wish", element: <Private><WishList></WishList></Private> },
        { path: "/order", element: <BuyerPrivate><Order></Order></BuyerPrivate> },
        { path: "/add", element: <SellerPrivate><AddProduct></AddProduct></SellerPrivate> },
        { path: "/products", element: <SellerPrivate><MyProducts></MyProducts></SellerPrivate> },
        { path: "/allSellers", element: <AdminPrivate><AllSellers></AllSellers></AdminPrivate> },
        { path: "/allBuyers", element: <AdminPrivate><AllBuyers></AllBuyers></AdminPrivate> },
        { path: "/report", element: <AdminPrivate><Report></Report></AdminPrivate> },

      ],
    },
    {
      path:'*', element:<NotFound></NotFound>
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={routers}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
