import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Navbar'
import Movies from './Movies'
import Footer from './Footer'
import './index.css';
import Series from './Series'
import { BrowserRouter , Routes, Route} from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path='/movies' element={<Movies />} />
        <Route path='/series' element={ <Series />} />
      </Routes>
    </BrowserRouter>
    
    
    {/* <Footer /> */}
   
  </StrictMode>,
)
