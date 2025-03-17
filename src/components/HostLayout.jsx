import HostHeader from './HostHeader'
import {Outlet} from 'react-router-dom' 

const HostLayout = () => {
    return (
        <div>
            <HostHeader/>
            <Outlet/> 
        </div>
    )
}

export default HostLayout