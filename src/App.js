import "./App.css";
import { items } from "./example-items";
import ShoppingListItem from "./ShoppingListItem";
import StyledList from "./StyledList";
import useStore from "./useStore";
import { search } from "fast-fuzzy";
import { useState } from "react";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const selectedItems = useStore((state) => state.shoppingItems);
  const addItem = useStore((state) => state.addItem);
  const [availableItems, setAvailableItems] = useState(items);

  function handleAdd(item) {
    addItem(item);
    setAvailableItems(availableItems.filter((item_) => item_._id !== item._id));
    setSearchResults([]);
  }

  return (
    <div className="App">
      <h1> Einkaufsliste </h1>
      <StyledList>
        {" "}
        {selectedItems.map((item) => (
          <ShoppingListItem key={item._id} name={item.name.de} />
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
                onAdd={() => {
                  handleAdd(item);
                }}
              />
            ))}{" "}
      </StyledList>
    </div>
  );
}

export default App;
