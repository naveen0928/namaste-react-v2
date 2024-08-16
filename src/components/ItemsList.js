// import { RESTAURANT_CARD_LOGO } from "../utils/Constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsList = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = () => {
    dispatch(addItem(data));
  };

  return (
    <div>
      {data.map((item) => {
        return (
          <div key={item.card.info.id} className="text-left p-2 m-2 border-b-2">
            <div>
              <span className="font-bold">{item.card.info.name} - </span>
              <span>
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
            </div>
            <div className="flex justify-between">
              <p className="text-xs w-9/12">{item.card.info.description}</p>
              <img
                className="rounded-sm w-3/12"
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
                  item.card.info.imageId
                }
              />
              {item.card.info.imageId && (
                <button
                  className="absolute p-2 mx-[470px] my-16 bg-black text-white shadow-lg rounded-sm"
                  onClick={handleAddItem}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsList;
