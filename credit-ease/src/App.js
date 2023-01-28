import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/footer/Footer";
import About from "./pages/about/About"
import Team from "./pages/team/Team"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div><Home/></div>,
    },
    {
      path: "/about",
      element: <div><About/></div>,
    },
    {
      path: "/team",
      element: <div><Team/></div>,
    },
  ]);

  return (
    <div>
      <Navbar/>
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
