import { RESTAURANT_CARD_LOGO } from "../utils/Constants";

const RestaurantCard = ({ resCard }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resCard;
  return (
    <div className="card-container">
      <div className="img-card-container">
        <img
          className="card-img"
          src={RESTAURANT_CARD_LOGO + cloudinaryImageId}
          alt="card"
        />
      </div>
      <div>
        <h3>{name}</h3>
        <h4>{avgRating + " rating"}</h4>
        <h4>{sla.slaString}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export default RestaurantCard;
