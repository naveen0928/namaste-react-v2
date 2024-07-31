import { useState, useEffect } from "react";
import FakeLoader from "./fakeLoader";
import { RESTAURANT_MENU_LIST } from "../utils/Constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_MENU_LIST + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (resInfo === null) return <FakeLoader />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;

  return (
    <div>
      <h2>{name}</h2>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <>
        {itemCards?.map((card) => (
          <li key={card?.card?.info?.id}>
            {card?.card?.info?.name} - {"Rs-"} {card?.card?.info?.price / 100}
          </li>
        ))}
      </>
    </div>
  );
};

export default RestaurantMenu;
