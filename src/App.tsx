import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import BarberDetails from './pages/BarberDetails';
function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element= {<Home />}>
        </Route>
        <Route path='/BarberDetails' element={<BarberDetails />}></Route>
      </Routes>
    </Router>
  )
}

export default App
