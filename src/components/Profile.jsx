import { Link, Navigate } from "react-router-dom"
import { logout } from "../utils/logout"

const Profile = () => {
    const isLoggedIn = JSON.parse(localStorage.getItem("loggedin"))
    return(
        <div>
            {isLoggedIn && <div><h3>Hello user</h3><button onClick={logout}>Log out</button></div>}
            {!isLoggedIn && <Navigate to="/login">Please login from here</Navigate>}
        </div>
    )
    
}

export default Profile