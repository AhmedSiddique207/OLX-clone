import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScreenAd from './components/ads/ScreenAd';
import Adscreeninfo from "./components/category screen/adscreeninfo"
import Adscreen from "./components/category screen/adscreen"
import LoginSignupModal from './components/header/LoginSignupModal';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/LoginSignupModal',
    element: <LoginSignupModal />
  },
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


