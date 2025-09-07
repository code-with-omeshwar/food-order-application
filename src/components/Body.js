import { useContext, useState } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resObject from "../utils/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantBody from "../utils/useRestaurantBody";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
    const [searchText, setSearchText] = useState("");
    const listOfRestaurants = useRestaurantBody();
    const filteredRestaurants = listOfRestaurants;
    const RestaurantPromotedComponent = withPromotedLabel();
    const { userName, setName } = useContext(UserContext);


    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false) {
        return (
            <h1>Looks like you are offline</h1>
        )
    }

    if (listOfRestaurants.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="filter flex items-center">
                <div className="search-container m-4 p-4">
                    <input
                        type="text"
                        className="border border-solid border-black"
                        value={searchText} onChange={(e) => setSearchText(e.target.value)}
                    />
                    <button
                        className="px-4 py-1 bg-green-100 m-4 rounded-lg"
                        onClick={() => {
                            // Implement search functionality here
                            const newData = listOfRestaurants.filter((restaurant) =>
                                restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(newData);
                        }}>
                        Search
                    </button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-1 bg-gray-100 m-4 rounded-lg"
                        onClick={() => {
                            const newRestaurants = resObject.filter((restaurant) => restaurant.info.avgRating > 4.2);
                            setListOfRestaurants(newRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div>
                    <label className="font-black">UserName: </label>
                    <input className="border border-black px-1 m-2" value={userName} onChange={(e) => setName(e.target.value)} />
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurants.map((restaurant) => (
                    <Link
                        key={restaurant.info.id}
                        to={"/restaurant/" + restaurant.info.id}>
                        {(restaurant.info?.promoted) ?
                            (<RestaurantPromotedComponent resData={restaurant} />)
                            : (<RestaurantCard restaurant={restaurant} />)
                        }
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default Body;