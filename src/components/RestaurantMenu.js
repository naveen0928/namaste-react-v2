import FakeLoader from "./fakeLoader";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
