import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import AddStudents from './pages/AddStudents';
import Students from './pages/Students';
import Courses from './pages/Courses';
import AddCourses from './pages/AddCourses';
import Results from './pages/Results';
import AddResults from './pages/AddResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/add-students',
    element: <AddStudents />,
  },
  {
    path: '/students',
    element: <Students />,
  },
  {
    path: '/add-courses',
    element: <AddCourses />,
  },
  {
    path: '/courses',
    element: <Courses />,
  },
  {
    path: '/add-results',
    element: <AddResults />,
  },
  {
    path: '/results',
    element: <Results />,
  },
]);

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
