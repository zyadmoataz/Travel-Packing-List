export default function Item({ item, onDeletedItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}{" "}
        {<button onClick={() => onDeletedItems(item.id)}>❌</button>}
      </span>
    </li>
  );
}
