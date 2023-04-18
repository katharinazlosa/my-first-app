import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import "./styles/styles.scss";
import Teorem from "./pages/teorem";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/ispit",
      element: <Ispit />,
    },
    {
      path: "/exe",
      element: <Exe />,
    },
    {
      path: "/mlinar",
      element: <Mlinar />,
    },
    {
      path: "/teorem",
      element: <Teorem />,
    },
    // {
    //   path: "/mlinar",
    //   element: <Mlinar />,
    // },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
