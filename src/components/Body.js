import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { FETCH_RESTAURANTS_LIST } from "../utils/Constants";
import FakeLoader from "./fakeLoader";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(FETCH_RESTAURANTS_LIST);
    const json = await data.json();
    setResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return resList.length === 0 ? (
    <FakeLoader />
  ) : (
    <div>
      <div className="search-container">
        <div className="search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              setFilteredList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            search
          </button>
        </div>
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
        {filteredList.map((item) => (
          <RestaurantCard key={item.info.id} resCard={item.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
