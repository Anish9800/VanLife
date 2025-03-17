import {useOutletContext} from 'react-router-dom'

const HostVanDetailsPhotos = () => {
    
    const vanDetails = useOutletContext()
    return (
        <div className='HostVaninnerDetailPhotos'>
            <img src={vanDetails.imageUrl}/>
        </div>
        
    )
}

export default HostVanDetailsPhotos