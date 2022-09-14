import "./App.css";
import ShoppingListItem from "./ShoppingListItem";
import StyledList from "./StyledList";
import useStore from "./useStore";
import { search } from "fast-fuzzy";
import { useEffect, useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const selectedItems = useStore((state) => state.shoppingItems);
  const allItems = useStore((state) => state.allItems);
  const fetchItems = useStore((state) => state.fetchItems);
  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const [availableItems, setAvailableItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  useEffect(() => {
    setAvailableItems(allItems);
  }, [allItems]);

  function handleAdd(item) {
    addItem(item);
    setAvailableItems(availableItems.filter((item_) => item_._id !== item._id));
    setSearchResults([]);
  }

  function handleRemove(item) {
    removeItem(item._id);
    setAvailableItems([...availableItems, item]);
  }

  return (
    <div className="App">
      <h1> Einkaufsliste </h1>
      <StyledList>
        {" "}
        {selectedItems.map((item) => (
          <ShoppingListItem
            key={item._id}
            name={item.name.de}
            onClick={() => handleRemove(item)}
          />
        ))}{" "}
      </StyledList>
      <label htmlFor="shoppingItem"> Was möchtest du einkaufen? </label>
      <input
        type={"text"}
        id="shoppingItem"
        name="shoppingItem"
        onChange={(event) => {
          setSearchResults(
            search(event.target.value, availableItems, {
              keySelector: (obj) => obj.name.de,
            })
          );
        }}
      ></input>
      <StyledList>
        {" "}
        {searchResults.length === 0
          ? "Wir konnten nicht finden, wonach du gesucht hast."
          : searchResults.map((item) => (
              <ShoppingListItem
                key={item._id}
                name={item.name.de}
                onClick={() => {
                  handleAdd(item);
                }}
              />
            ))}{" "}
      </StyledList>
    </div>
  );
}

export default App;
