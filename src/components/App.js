import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleClearList() {
    const confirmed = window.confirm(
      "Are You Sure You Want To Delete All Items?"
    ); //if okay it will be true if cancel it will be false
    if (confirmed) setItems([]);
  }

  function handleAddItems(item) {
    //new state depend on current state, so pass a callback function not single value
    //we  can't push items as we cannot mutate state in React
    setItems((items) => [...items, item]); //this new items array will be the current items array + new item new item added to end
  }

  function handleDeletedItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItems(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        item={items}
        onDeletedItems={handleDeletedItems}
        onToggleItems={handleToggleItems}
        onClearList={handleClearList}
      />
      <Stats item={items} />
    </div>
  );
}
