import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/pages/home.jsx';
import Events from './components/pages/events.jsx';
import DetailEvent from './components/pages/detailEvent.jsx';
import Report from './components/pages/report.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404</div>,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/events/:id",
    element: <DetailEvent />,
  },
  {
    path: "/report",
    element: <Report />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
