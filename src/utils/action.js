import { loginUser } from "../api/api"
import { redirect } from "react-router-dom"

export const action = async ({request}) => {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    const param = new URL(request.url).searchParams.get("redirectTo")||"/host"
    try{
        const response = await loginUser({email,password})
        localStorage.setItem("loggedin",true)
        return redirect(param)
    }
    catch(error){
        localStorage.setItem("loggedin",false)
        return error
    }

}