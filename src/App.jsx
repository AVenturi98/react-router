import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Name from './pages/Name'
import Character from './pages/Character'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/name' element={<Name />}></Route>
          <Route path='/character' element={<Character />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
