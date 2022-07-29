import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Einkaufsliste </h1>

      <label for="shoppingItem"> Was möchtest du einkaufen? </label>
      <input type={"text"} id="shoppingItem" name="shoppingItem"></input>
    </div>
  );
}

export default App;
