import "./App.css";
import { items } from "./example-items";
import ShoppingListItem from "./ShoppingListItem";
import StyledList from "./StyledList";

function App() {
  return (
    <div className="App">
      <h1> Einkaufsliste </h1>
      <StyledList>
        {" "}
        {items.map((item) => (
          <ShoppingListItem key={item._id} name={item.name.de} />
        ))}{" "}
      </StyledList>
      <label for="shoppingItem"> Was möchtest du einkaufen? </label>
      <input type={"text"} id="shoppingItem" name="shoppingItem"></input>
    </div>
  );
}

export default App;
