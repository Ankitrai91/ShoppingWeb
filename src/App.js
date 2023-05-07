import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
   <Header/>
   <div>
    {/* <Router> */}
      <>
      <Routes>


      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
    {/* <Route path='/cart' exact>
<Cart/>
    </Route> */}
      </Routes>
      </>

    {/* </Router> */}
   </div>
    </>
  );
}


export default App;
