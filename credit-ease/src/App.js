import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import About from "./pages/about/About"
import Team from "./pages/team/Team"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css"
import './style.scss'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Navbar/><Home/><Footer/></div>,
    },
    {
      path: "/about",
      element: <div><Navbar/><About/><Footer/></div>,
    },
    {
      path: "/team",
      element: <div><Navbar/><Team/><Footer/></div>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
