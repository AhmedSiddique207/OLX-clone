import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ScreenAd from './components/ads/ScreenAd';
import Adscreeninfo from "./components/category screen/adscreeninfo";
import Adscreen from "./components/category screen/adscreen";
import LoginSignupModal from './components/header/LoginSignupModal';
import Homepage from "./Homepage";
import { Provider } from 'react-redux';
import { store, persistor } from './App/store';
import { PersistGate } from 'redux-persist/integration/react';

// Define routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/LoginSignupModal',
    element: <LoginSignupModal />
  },
  {
    path: '/ScreenAd/:id',
    element: <ScreenAd />
  },
  {
    path: '/adscreeninfo/:id',
    element: <Adscreeninfo />
  },
  {
    path: '/adscreen/:type',
    element: <Adscreen />
  },
  {
    path: '/homepage',
    element: <Homepage />
  },
]);

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
