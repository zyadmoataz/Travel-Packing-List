import { HiMiniXCircle } from "react-icons/hi2";

export default function Item({ item, onDeletedItems, onToggleItems }) {
  return (
    <li>
      <input
        type='checkbox'
        value={item.packed}
        onChange={() => onToggleItems(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className='number'>{item.quantity}</span>
        <span>{item.description} </span>
        {
          <button onClick={() => onDeletedItems(item.id)} className='close'>
            <HiMiniXCircle />
          </button>
        }
      </span>
    </li>
  );
}
