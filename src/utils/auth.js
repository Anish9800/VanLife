import { redirect } from "react-router-dom"

export const checkAuth = async (path) => {
    const loggedIn = JSON.parse(localStorage.getItem("loggedin"))
    
    if(!loggedIn){
        // const response =  redirect(`/login?message=You need to first login!&redirectTo=${path}`)
        // response.body = true
        // return response
        //throw does not work with mirage.js
        throw  redirect(`/login?message=You need to first login!&redirectTo=${path}`)
    }
    return null
}