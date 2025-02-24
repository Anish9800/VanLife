import {BrowserRouter , Routes, Route ,Link} from 'react-router-dom'
import './App.css'
// import Header from './components/Header'
import VanMain from  './components/VanMain'
import Footer from './components/Footer'
import About from './components/About'

function App() {

  return (
    <>
      
      <BrowserRouter>
        <div className="Header">
          <Link to='/'><p>#VANLIFE</p></Link>
          <nav className="NavBar">
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/Vans'>Vans</Link>
          </nav>
        </div>
        <Routes>
            <Route path='/' element={<VanMain />}/>
            <Route path='/about' element={<About/>} />
        </Routes>
    </BrowserRouter>
    <Footer />
    </>
    
  )
}

export default App
