export default function ShoppingListItem({ name, onClick }) {
  return (
    <li>
      <button onClick={onClick}>{name}</button>
    </li>
  );
}
