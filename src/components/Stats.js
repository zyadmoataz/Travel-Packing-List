export default function Stats({ item }) {
  //it doesn't make sense to do these calculations when there is no items => option od early return 👌
  if (!item.length)
    return (
      <p className="stats">
        <em>Start Adding Some Items To Your Packing List 🚀</em>
      </p>
    );

  const numItems = item.length; //calculated base on the items array
  const packedItems = item.filter((i) => i.packed).length;
  const percentageItems = Math.round((packedItems / numItems) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageItems === 100
          ? "You Have Packed Everything, Ready To Go ✈️"
          : `👜 You have ${numItems} items on your list, and you already packed ${packedItems} (${percentageItems}%)`}
      </em>
    </footer>
  );
}
