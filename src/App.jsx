import React, { useState } from 'react';
import Form from './components/form'
import { items } from './api/db.json'
import './styles.scss'

export const userContext = React.createContext()

function App() {

  const [apiData, setApiData] = useState(items);

  return (
    <userContext.Provider value={apiData}>
      <Form/>
    </userContext.Provider>
  )
}

export default App
