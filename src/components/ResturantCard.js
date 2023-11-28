import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const { resData } = props;

    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } = resData?.info;
    console.log("Error of resData:", resData)
    return (
        <div className="res-card">
            <img className="food-logo"
                alt="food-logo"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>

        </div>
    )
}

export default ResturantCard;