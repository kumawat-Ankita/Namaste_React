import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";


const Body = () => {

    const [listOfResturant, setListOfResturant] = useState([]);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        console.log(json);
        //Optional chaining

        setListOfResturant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return listOfResturant.length === 0 ? (<Shimmer />
    ) : (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfResturant.filter(res => res.info.avgRating > 4)
                        setListOfResturant(filteredList);
                    }}
                >
                    Top Rated Resturants
                </button>
            </div>
            <div className="res-container">
                {listOfResturant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} />
                ))}
            </div>
        </div>
    );
};

export default Body;