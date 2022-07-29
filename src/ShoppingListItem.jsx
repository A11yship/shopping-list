export default function ShoppingListItem({ name, onAdd }) {
  return (
    <li>
      <button onClick={onAdd}>{name}</button>
    </li>
  );
}
