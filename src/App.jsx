import React, { useState } from 'react';
import Form from './components/form'
import { items } from './api/db.json'
import './styles.scss'
import Database from './components/database';
import { HashRouter, Route, Routes } from 'react-router-dom';

export const userContext = React.createContext()

function App() {

  const [apiData, setApiData] = useState(items);

  return (
    <userContext.Provider value={apiData}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Form/>}/>
          <Route path='/respuestas' element={<Database/>} />
        </Routes>
      </HashRouter>
    </userContext.Provider>
  )
}

export default App
