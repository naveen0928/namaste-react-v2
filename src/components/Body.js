import { useContext, useEffect, useState } from "react";
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { FETCH_RESTAURANTS_LIST } from "../utils/Constants";
import FakeLoader from "./fakeLoader";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const WithPromotedRestaurantCard = WithPromotedLabel(RestaurantCard);

  const { loggedInUser, setUserName } = useContext(UserContext);

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

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline.. Please check your internet connection.
      </h1>
    );

  return resList.length === 0 ? (
    <FakeLoader />
  ) : (
    <div>
      <div className="flex p-2 m-2">
        <div className="mx-2">
          <input
            className="border border-solid border-black"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="px-2 py-[2px] m-2 bg-gray-400 items-center rounded-sm"
            onClick={() => {
              setFilteredList(
                resList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
        <button
          className="cursor-pointer bg-green-300 px-2 py-[2px] m-2 rounded-sm"
          onClick={() => {
            setResList(resList.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top Rated Restaurants
        </button>
        <div className="mt-2">
          <label>User name : </label>
          <input
            className="border border-black rounded-sm p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap rounded-lg">
        {filteredList.map((item) => (
          <Link to={"restaurants/" + item.info.id} key={item.info.id}>
            {item.info.avgRating > 4.4 ? (
              <WithPromotedRestaurantCard resCard={item.info} />
            ) : (
              <RestaurantCard resCard={item.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
