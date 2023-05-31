import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/header";
import Exe from "./pages/exe";
import Home from "./pages/home";
import Ispit from "./pages/ispit";
import Mlinar from "./pages/mlinar";
import "./styles/styles.scss";

import Teorem from "./pages/teorem";
import Fave from "./pages/fave";
import Varijable from "./pages/varijable";
import Petlje from "./pages/petlje";
import Vjezba2604 from "./pages/vjezba2604";
import Vjezba2804 from "./pages/vjezba2804";
import Vjezba0305 from "./pages/vjezba0305";
import Vjezbe from "./pages/vjezbe";
import Stranice from "./pages/stranice";
import Ispiti from "./pages/ispiti";
import Breweries from "./pages/breweries";
import Pokemon from "./pages/pokemon";
import Europe from "./pages/europe";
import EuropeCountry from "./pages/europeCountry";
import Vjezba1505 from "./pages/vjezba1505";
import Todo from "./pages/todo";
import Chat from "./pages/chat";
import IspitJS from "./pages/ispitJS";
import BooksClub from "./pages/booksclub";

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
    {
      path: "/fave",
      element: <Fave />,
    },
    {
      path: "/varijable",
      element: <Varijable />,
    },
    {
      path: "/petlje",
      element: <Petlje />,
    },
    {
      path: "/vjezba2604",
      element: <Vjezba2604 />,
    },
    {
      path: "/vjezba2804",
      element: <Vjezba2804 />,
    },
    {
      path: "/vjezba0305",
      element: <Vjezba0305 />,
    },
    {
      path: "/vjezbe",
      element: <Vjezbe />,
    },
    {
      path: "/stranice",
      element: <Stranice />,
    },
    {
      path: "/ispiti",
      element: <Ispiti />,
    },
    {
      path: "/breweries",
      element: <Breweries />,
    },
    {
      path: "/pokemon",
      element: <Pokemon />,
    },
    {
      path: "/europe",
      element: <Europe />,
    },
    {
      path: "/europe/:capitalId",
      element: <EuropeCountry />,
    },
    {
      path: "/vjezba1505",
      element: <Vjezba1505 />,
    },
    {
      path: "/todo",
      element: <Todo />,
    },
    {
      path: "/chat",
      element: <Chat />,
    },
    {
      path: "/ispitJS",
      element: <IspitJS />,
    },
    {
      path: "/booksclub",
      element: <BooksClub />,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
