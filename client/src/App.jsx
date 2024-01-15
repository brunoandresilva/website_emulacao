import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Tabela from './Tabela'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tabela' element={<Tabela />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
