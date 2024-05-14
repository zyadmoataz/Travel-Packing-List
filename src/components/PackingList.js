import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  item,
  onDeletedItems,
  onToggleItems,
  onClearList,
}) {
  const [sort, setSort] = useState("input");
  let sortedItems; //derive state

  if (sort === "input") sortedItems = item;

  //here we will use slice to not to mutate original one
  //we will use local compare method as we will sort alphebatically
  if (sort === "description")
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  //if we are going to sort booleans =>convert it to number
  if (sort === "packed")
    sortedItems = item.slice().sort((a, b) => +a.packed - +b.packed);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            item={i}
            key={i.id}
            onDeletedItems={onDeletedItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="input">Sort By Input Order</option>
          <option value="description">Sort By Description</option>
          <option value="packed">Sort By Packed Status</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
