import {useOutletContext} from 'react-router-dom'

const HostVanDetailsPricing = () => {

    const vanDetails = useOutletContext()
    return (
        <div >
            <p><span style={{fontWeight:'bold'}}>${vanDetails.price}</span> /day</p>
        </div>
    )
}

export default HostVanDetailsPricing