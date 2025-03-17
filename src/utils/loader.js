import {defer} from 'react-router-dom'
import {getVans, getVan, getHostVans} from '../api/api'

export function loader() {
    return defer({ vans: getVans()})
}

export function vanDetailsLoader({params}) {
    return defer({ vans: getVan(params.id)})
}

export function hostLoader() {
    return defer({ hostvans: getHostVans()})
}

export function showLoginMsg({request}) {
    return new URL(request.url).searchParams.get("message")
}