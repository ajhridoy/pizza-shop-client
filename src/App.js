import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Cart from './Components/Cart/Cart';
import Login from './Components/Login/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
      ]
    }
  ])
  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
