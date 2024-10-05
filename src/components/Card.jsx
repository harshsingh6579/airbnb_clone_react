import star from './star.png'

export default function Card(props) {
    let badgeText
    if(!props.openSpots) {
        badgeText = "sold out"
    } else if (props.location == "Online") {
        badgeText = "Online"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
            <img className="card-img" src={props.coverImg} alt={props.title} />
            <div className="card-stats">
                <img src={star} className="star-img"/>
                <div className="card-rating">{props.stats.rating}</div>
                <div className="card-reviewCount">({props.stats.reviewCount})</div>
                <div className="seperator-dot"></div>
                <div className="card-location">{props.location}</div>
            </div>
            <h3 className="card-title">{props.title}</h3>
            <p className="card-price"><span className="semi-bold">From ${props.price}</span> / person</p>
        </div>
    )
}