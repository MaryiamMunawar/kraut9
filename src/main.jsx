import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar  from '../src/Components/Navbar.jsx';
import Content from '../src/Components/Content.jsx';
import Welcome from '../src/Components/Welcome.jsx';
import Boxes from '../src/Components/Boxes.jsx';
import About from '../src/Components/About.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Content/>
    <Welcome/>
    <Boxes/>
    <About/>
  </React.StrictMode>,
)
