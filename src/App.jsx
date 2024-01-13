import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import * as ReactDOM from "react-dom/client";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
// import{Header,ProductItems,Footer} from './Components/index';
import { Home,About, ProductDetails } from './Pages/index.js'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/productdetail/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
