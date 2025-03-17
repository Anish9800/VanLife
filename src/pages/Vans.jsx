import { Suspense } from 'react'
import {useSearchParams, useLoaderData, Await} from 'react-router-dom'
import Van from './Van'

const Vans = () => { 
    //const [vanList, setVanList] = useState([])
    const vanPromise = useLoaderData()
    const [searchParams, setSearchParams] = useSearchParams()
    const typeFilter = searchParams.get("type")
    // useEffect(()=>{

    //     const getVanDetails = async () => {
    //         setLoader(true)
    //         try {
    //             const data = await getVans()
    //             setVanList(data)
    //         }
    //         catch(error){
    //             console.log(error)
    //         }
    //         finally{
    //             setLoader(false)
    //         }
    //     }
    //     getVanDetails()

    // },[])
    const renderVanElements = vanList => {
        const filteredVans = typeFilter ? vanList.filter(item => item.type.toLowerCase() === typeFilter.toLowerCase()) : vanList
        const allVans = filteredVans.map(item => {
            return <Van 
                        key={item.id}
                        vanDetails = {item}
                        filter = {searchParams}
                        filterType = {typeFilter}
                    />
        })

        return (
            <>
                <section className='vanFilterLink'>
                    <button className={typeFilter === 'rugged'?'btnRuggedActive':'btnRugged'} onClick={() => setSearchParams({type:"rugged"})}>Rugged</button>
                    <button className={typeFilter === 'simple'?'btnSimpleActive':'btnSimple'} onClick={() => setSearchParams({type:"simple"})}>Simple</button>
                    <button className={typeFilter === 'luxury'?'btnLuxuryActive':'btnLuxury'} onClick={() => setSearchParams({type:"luxury"})}>Luxury</button>
                    {typeFilter && <button className='btnClearFilter' onClick={() => setSearchParams({})}>Clear filter</button>}
                </section>
                <section className='VanList'>
                    {allVans}
                </section>
            </>
        )
    }

    return (
        <div className="VanContainer">
            <h1>Explore our van options</h1>
            <Suspense fallback={<h3>Your Vans are loading...</h3>}>
                <Await resolve={vanPromise.vans}>
                    {renderVanElements}
                </Await>
            </Suspense>
        </div>
    )
}

export default Vans