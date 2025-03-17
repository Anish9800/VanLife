import {useRouteError} from 'react-router-dom'

const ErrorHandler = () => {
    const errorData = useRouteError()
    return (
        <>
            <h3>{errorData.message}</h3>
            <pre>{errorData.status} - {errorData.statusText}</pre>
        </>
    )
}

export default ErrorHandler