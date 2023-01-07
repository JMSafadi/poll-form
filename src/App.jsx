import React, { useState } from 'react';
import Form from './components/form'
import { items } from './api/db.json'
import './styles.scss'
import Database from './components/database';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/challenge',
    element: <Form/>
  },
  {
    path: '/challenge/respuestas',
    element: <Database/>
  }
])

export const userContext = React.createContext()

function App() {

  const [apiData, setApiData] = useState(items);

  return (
    <userContext.Provider value={apiData}>
      <RouterProvider router={router} />
    </userContext.Provider>
  )
}

export default App
