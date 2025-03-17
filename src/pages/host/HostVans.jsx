import { Suspense } from 'react'
import {Link, useLoaderData, Await} from 'react-router-dom'

const HostVans = () => {

    const vanPromise = useLoaderData()

    return (
        <Suspense fallback={<h3>Vans are loading ...</h3>}>
            <Await resolve={vanPromise.hostvans}>
                {
                    vans => {
                        const vanList = vans.map(item => {
                            return (
                                <Link key={item.id} to={item.id}>
                                    <div key={item.id} className='HostVansList'>
                                        <img src={item.imageUrl}/>
                                        <section>
                                            <h3>{item.name}</h3>
                                            <p>${item.price}/day</p>
                                        </section>
                                    </div>
                                </Link>
                            )
                        })
                        return (
                            <div className='HostVans'>
                                <h2>Your listed vans</h2>
                                {vanList}
                            </div>
                        )
                    }
                }
                
            </Await>
        </Suspense>
    )
}

export default HostVans