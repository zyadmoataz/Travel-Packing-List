import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault(); //prevent reloading of page as its normal html behaviour
    if (!description) return; //guard clause
    const newItem = { description, quantity, packed: false, id: Date.now() };
    console.log(newItem);
    onAddItems(newItem);
    setDescription(""); //set it to default value after submit
    setQuantity(1); //set it to default value after submit
  }
  return (
    <form className='add-form' onSubmit={handleSubmit}>
      {" "}
      {/* it will work when we click on button or on enter*/}
      <h3>What do you need for your trip?</h3>
      <div className='form-container'>
        <select value={quantity} onChange={(e) => setQuantity(+e.target.value)}>
          {" "}
          {/*this value comes from value attribute from option*/}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((opt) => (
            <option value={opt} key={opt}>
              {opt}
            </option>
          ))}
        </select>
        <input
          type='text'
          placeholder='Items...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />{" "}
        {/*e.target.value is always a string*/}
        <button>Add</button>{" "}
        {/* if we add on click here it will be working if we click on button only */}
      </div>
    </form>
  );
}
