import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FETCH_RESTAURANTS_LIST } from "../utils/Constants";

const Body = () => {
  const [resList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANTS_LIST);
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div>
      <div>
        <button
          className="top-rated-btn"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {resList.map((item) => (
          <RestaurantCard key={item.info.id} resCard={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
