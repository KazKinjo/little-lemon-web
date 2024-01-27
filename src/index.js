import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from './App';
import Home from './components/Home/Home';
import BookingPage from './components/Booking/BookingPage';
import ConfirmedBooking from './components/Booking/ConfirmedBooking';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        // element: </>,
      },
      {
        path: "/menu",
        // element: </>,
      },
      {
        path: "/booking",
        element: <BookingPage />,
      },
      {
        path: "/order-online",
        // element: < />,
      },
      {
        path: "/login",
        // element: < />,
      },
      {
        path: "/confirmed",
        element: <ConfirmedBooking />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);