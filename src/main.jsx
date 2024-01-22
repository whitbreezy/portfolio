//required imports from react-dom to set up app and router functionality
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//imports for styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
//import app and pages
import App from './App.jsx';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);

