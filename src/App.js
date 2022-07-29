import "./App.css";
import { items } from "./example-items";
import ShoppingListItem from "./ShoppingListItem";

function App() {
  return (
    <div className="App">
      <h1> Einkaufsliste </h1>
      <ul>
        {" "}
        {items.map((item) => (
          <ShoppingListItem key={item._id} name={item.name.de} />
        ))}{" "}
      </ul>
      <label for="shoppingItem"> Was möchtest du einkaufen? </label>
      <input type={"text"} id="shoppingItem" name="shoppingItem"></input>
    </div>
  );
}

export default App;
