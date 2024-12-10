import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Name from './pages/Name'
import Character from './pages/Character'
import Nav from './layout/Nav'
import DefaultLayout from './layout/DefaultLayout'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/name' element={<Name />}></Route>
            <Route path='/character' element={<Character />}></Route></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
