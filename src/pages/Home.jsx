import HomeImg from '../assets/vanbg.jpg'

const Home = () => {
    return(
        <div className="VanMain">
            <img src={HomeImg}></img>
            <div className='HomeDetails'>
                <h1>You got the travel plans, we got the travel vans.</h1>  
                <p>
                    Add advanture to your life by joining the #vanlife movement. Rent the perfect
                    van to make your perfect road trip.
                </p>
                <button>Find your van</button>
            </div>
        </div>
    )
}

export default Home