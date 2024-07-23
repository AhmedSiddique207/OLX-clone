import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './components/header/Signup';
import Login from './components/header/Login';
import ScreenAd from './components/ads/ScreenAd';
import Adscreeninfo from "./components/category screen/adscreeninfo"
import Adscreen from "./components/category screen/adscreen"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/Login',
    element: <Login />
  },
  {
    path: '/Signup',
    element: <Signup />
  }
  ,
  {
    path: '/ScreenAd/:id',
    element: <ScreenAd />
  },
  {
    path: '/adscreeninfo/:id',
    element:<Adscreeninfo />
  },
  {
    path: '/adscreen/:type',
    element:<Adscreen />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


