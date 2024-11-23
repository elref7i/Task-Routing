import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/Contact/Contact';

export default function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/home', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
