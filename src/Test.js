import React, { useState } from "react";

const ItemList = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Item 1", description: "This is the first item" },
    { id: 2, name: "Item 2", description: "This is the second item" },
    { id: 3, name: "Item 3", description: "This is the third item" },
    // ... other items
  ]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = () => {
    const filtered = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <ul>
        {filteredItems.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
