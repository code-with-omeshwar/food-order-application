import { CDN_URL } from "../utils/constant";

const RestaurantCard = ({ restaurant }) => {

    const { name, cloudinaryImageId: image, cuisines, avgRating: rating, costForTwo, sla: { slaString: deliveryTime } } = restaurant?.info;

    return (
        <div className="p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-200">
            <img className="res-logo" src={CDN_URL + image} alt="image" />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>Rating: {rating}</h4>
            <h4>Delivery Time: {deliveryTime}</h4>
            <h4>Cost for Two: {costForTwo}</h4>
        </div>
    )
}

export const withPromotedLabel = () => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;