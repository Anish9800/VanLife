import {NavLink,Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="Header">
            <Link to='.'><p>#VANLIFE</p></Link>
            <nav className="NavBar">
                <NavLink to='.' className={({isActive}) => isActive? "MainLink":null}>Home</NavLink>
                <NavLink to='host' className={({isActive}) => isActive? "MainLink":null}>Host</NavLink>
                <NavLink to='about' className={({isActive}) => isActive? "MainLink":null}>About</NavLink>
                <NavLink to='vans' className={({isActive}) => isActive? "MainLink":null}>Vans</NavLink>
                <NavLink to='profile' className={({isActive}) => isActive? "MainLink":null}>Profile</NavLink>
            </nav>
        </div>
    )
}

export default Header