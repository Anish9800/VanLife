import {Link} from 'react-router-dom'

const Van = (props) => {
    let type = props.vanDetails.type
    let style
    if(type === "simple"){
        style = {background: "#FC6006"}
    }
    else if(type === "rugged"){
        style = {background: "#035103"}
    }
    else if(type === "luxury"){
        style = {background: "black"}
    }
    return(
        <Link to={props.vanDetails.id} state={{search:props.filter.toString(), filterType:props.filterType}}>
            <div className="Vans">
                <img src = {props.vanDetails.imageUrl} />
                <section className="VanSDetails">
                    <p>{props.vanDetails.name}</p>
                    <p>${props.vanDetails.price} /day</p>
                </section>
                <span style={style}>{props.vanDetails.type}</span>
            </div>
        </Link>
    )
}

export default Van