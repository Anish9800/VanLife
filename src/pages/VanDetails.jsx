import { Suspense } from 'react'
import {Link, useLocation, useLoaderData, Await} from 'react-router-dom'

const VanDetails = () => {
    
    const vanPromise = useLoaderData()
    const location = useLocation()
    
    return (
        <Suspense fallback={<h3>Loading van details ...</h3>}>
            <Await resolve={vanPromise.vans}>
                {
                    van => {
                        const search = location.state?.search || ""
                        const filterType = location.state?.filterType || "all"
                        let style
                        if(van.type === "simple"){
                            style = {background: "#FC6006"}
                        }
                        else if(van.type === "rugged"){
                            style = {background: "#035103"}
                        }
                        else if(van.type === "luxury"){
                            style = {background: "black"}
                        }
                        return (
                            <>
                                <div className='back-to-all-vans'>
                                    &larr;<Link to={`..?${search}`} relative="path">Back to {filterType} vans</Link>
                                </div>
                                <div className='VanDetails'>
                                    <img src={van.imageUrl} />
                                    <span style={style}>{van.type}</span>
                                    <h1>{van.name}</h1>
                                    <p className='VanPrice'><span>${van.price}</span>/day</p>
                                    <p>{van.description}</p>
                                    <button>Rent this van</button>
                                </div>
                            </>
                        )
                    }
                }
            </Await>
        </Suspense>
        
    )
}

export default VanDetails
