import { Suspense } from 'react'
import {NavLink, Link, Outlet, useLoaderData, Await} from 'react-router-dom'

const HostVanDetails = () => {
    const vanDetailsPromise = useLoaderData()
    
    return (
        <Suspense fallback={<h3>Van details loading ...</h3>}>
            <Await resolve={vanDetailsPromise.vans}>
                {
                    vanDetails => {
                        let style
                        if(vanDetails.type === "simple"){
                            style = {background: "#FC6006"}
                        }
                        else if(vanDetails.type === "rugged"){
                            style = {background: "#035103"}
                        }
                        else if(vanDetails.type === "luxury"){
                            style = {background: "black"}
                        }

                        return (
                            <>
                                <div className='back-to-all-vans'>
                                    &larr; <Link to='..' relative='path'>Back to all vans</Link>
                                </div>
                                <div className='HostVanDetails'>
                                    <div className='HostVanShortDetails'>
                                        <img src={vanDetails.imageUrl} />   
                                        <section>
                                            <p className='HostVanDetailsType' style={style}>{vanDetails.type}</p>
                                            <h2>{vanDetails.name}</h2>
                                            <p><span className='HostVanPrice'>${vanDetails.price}</span>/day</p>
                                        </section>
                                    </div>
                                    <div className='HostVanShortDetailsLinks'>
                                        <NavLink to={'.'} end className={({isActive}) => isActive ? "HostActiveLink":null} >Details</NavLink>
                                        <NavLink to={'pricing'} className={({isActive}) => isActive ? "HostActiveLink":null} >Pricing</NavLink>
                                        <NavLink to={'photos'} className={({isActive}) => isActive ? "HostActiveLink":null} >Photos</NavLink>
                                    </div>
                                    <Outlet context={vanDetails}/>
                                </div>
                            </>
                        )
                    }
                }
            </Await>
        </Suspense>
        
    )
}

export default HostVanDetails