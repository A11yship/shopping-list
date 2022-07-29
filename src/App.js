import "./App.css";
import { items } from "./example-items";
import ShoppingListItem from "./ShoppingListItem";
import StyledList from "./StyledList";
import useStore from "./useStore";

function App() {
  const selectedItems = useStore((state) => state.shoppingItems);
  const addItem = useStore((state) => state.addItem);

  return (
    <div className="App">
      <h1> Einkaufsliste </h1>
      <StyledList>
        {" "}
        {selectedItems.map((item) => (
          <ShoppingListItem key={item._id} name={item.name.de} />
        ))}{" "}
      </StyledList>
      <label for="shoppingItem"> Was möchtest du einkaufen? </label>
      <input type={"text"} id="shoppingItem" name="shoppingItem"></input>
    </div>
  );
}

export default App;
