import {BrowserRouter ,Link} from 'react-router-dom'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="Header">
                <p>#VANLIFE</p>
                <nav className="NavBar">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/Vans'>Vans</Link>
                </nav>
            </div>
        </BrowserRouter>
    )
}

export default Header