import ResturantCard from "./ResturantCard";
import { useEffect, useState } from "react";


const Body = () => {

    const [listOfResturant, setListOfResturant] = useState([]);

    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        //Optional chaining
        setListOfResturant(json?.data?.cards);
    }
    console.log("log data::", listOfResturant);
    if (listOfResturant.length === 0) {
        return <h1>Loading.....</h1>
    }


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfResturant.filter(res => res.info.avgRating > 4)
                        setListOfResturant(filteredList);
                    }}>Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {listOfResturant && listOfResturant.slice(5, 6)?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((restaurant) =>
                    (<ResturantCard key={restaurant?.card?.card?.id} resData={restaurant} />)
                )}
            </div>
        </div>
    );
};

export default Body;