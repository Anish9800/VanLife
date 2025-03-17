import { useLoaderData, useNavigation , Form, useActionData} from 'react-router-dom'

const Login = () => {
    
    const msg = useLoaderData()
    const apiResponse = useActionData()
    const navigation = useNavigation()
    const btnState = navigation.state

    return (
        <div className="signin">
            <h2>Sign in to your account</h2>
            {msg && <h4 style={{color:'red'}}>{msg}</h4>}
            {apiResponse && <h4 style={{color:'red'}}>{btnState === "idle"?apiResponse.message:null}</h4>}
            <Form method="post" replace className="signinForm">
                <input className="email" type='email' name='email' placeholder="Email address"/>
                <input className="pass" type='password' name='password' placeholder="Password"/>
                {<button disabled = {btnState === "submitting"}>{btnState === "submitting"?"Loging in ...":"Log in"}</button>}
            </Form>
            <section>
                <p>Don't have an account? Create one now</p>
            </section>
        </div> 
    )
}

export default Login