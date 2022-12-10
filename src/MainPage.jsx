// @author: Amir Armion
// @version: V.01

import SearchBar from "./SearchBar";
import List from "./List";
import { foods } from "./data";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./style.css";

function MainPage() 
{
  function filteredList(foods, typed)
  {
    let filteredItems = foods.filter((food) => food.name.split(" ").some((word) => {
        return word.toLowerCase().startsWith(typed.toLowerCase());
      })
    );

    return highlighted(filteredItems, typed.toLowerCase());
  }

  const highlighted = (filteredItems, typed) => {
    return filteredItems.map((item) => ({
      ...item, name: item.name.replace(new RegExp("(" + typed + ")", "ig"), "<mark>$1</mark>"),
      description: item.description.replace(new RegExp("(" + typed + ")", "ig"), "<mark>$1</mark>")
    }));
  };

  const [filter, setFilter] = useState("");

  function handleFilter(item)
  {
    setFilter(item);
  }

  return (
    <div>
      <SearchBar filter={filter} setFilter={handleFilter} />
      <hr style={{width: "100%"}} />
      {filteredList(foods, filter).map((food) => {
        return <List key={uuidv4()} food={food} />;
      })}
    </div>
  );
}

export default MainPage;
