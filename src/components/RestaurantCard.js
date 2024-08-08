import { RESTAURANT_CARD_LOGO } from "../utils/Constants";

const RestaurantCard = ({ resCard }) => {
  const { cloudinaryImageId, name, avgRating, sla, cuisines, areaName } =
    resCard;
  return (
    <div className="w-[200px] m-5 p-[2px] cursor-pointer bg-slate-100 hover:bg-gray-200">
      <div className="img-card-container">
        <img
          className="h-[150px] w-[100%] rounded-sm"
          src={RESTAURANT_CARD_LOGO + cloudinaryImageId}
          alt="card"
        />
      </div>
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <h4>{avgRating + " rating"}</h4>
        <h4>{sla.slaString}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
      </div>
    </div>
  );
};

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white p-1 m-2 font-bold">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
