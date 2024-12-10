import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Name from './pages/Name'
import Character from './pages/Character'
import DefaultLayout from './layout/DefaultLayout'
import BlankLayout from './layout/BlankLayout'
import Lost from './layout/Lost'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/name' element={<Name />}></Route>
            <Route path='/character' element={<Character />}></Route>
          </Route>
          <Route element={<BlankLayout />}>
            <Route path='*' element={<Lost />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
