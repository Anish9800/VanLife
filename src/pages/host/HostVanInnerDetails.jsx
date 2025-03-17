
import {useOutletContext} from 'react-router-dom'

const HostVanInnerDetails = () => {
    
    const vanDetails = useOutletContext()
    return (
        <div className='HostVaninnerDetailsLabel'>
            <p><span>Name : </span>{vanDetails.name}</p>
            <p><span>Category : </span>{vanDetails.type}</p>
            <p><span>Description :</span> {vanDetails.description}</p>
            <p><span>Visibility :</span> Public</p>
        </div>
        
    )
}

export default HostVanInnerDetails