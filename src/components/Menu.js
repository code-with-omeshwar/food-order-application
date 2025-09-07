import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurantMenuCategory";
import { useState } from "react";

const Menu = () => {
    const { id: menuID } = useParams()
    const menuData = useRestaurantMenu(menuID);
    const [showIndex, setShowIndex] = useState(null);

    const itemCategory = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    // console.log("------------------------------------------------------------------------------------------------------------------------------------------------------");
    // console.log(itemCategory);

    const nestedItemCategory = menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    )
    // console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++");
    // console.log(nestedItemCategory);

    if (!menuData) {
        return <Shimmer />;
    }
    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">
                {menuData?.data?.cards[2]?.card?.card?.info?.name}
            </h1>
            <p className="font-bold text-lg">
                {menuData?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ") + " - " + menuData?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}
            </p>
            {itemCategory.map((category, index) =>
                <RestaurantMenuCategory
                    key={category.card?.card.categoryId}
                    data={category?.card?.card}
                    showItems={index===showIndex}
                    setShowIndex={() => setShowIndex(index)}
                />
            )}
        </div>
    )
}
export default Menu;