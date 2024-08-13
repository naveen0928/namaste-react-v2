import ItemsList from "./ItemsList";

const RestaurantCategory = ({ itemsList, showIndex, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="p-4 bg-slate-50 w-6/12 mx-auto my-4 shadow-lg">
      <div>
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {itemsList.title} ({itemsList?.itemCards?.length})
          </span>
          <span>{showIndex ? "⬆️" : "⬇️"}</span>
        </div>
        {showIndex && <ItemsList data={itemsList?.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
