import React from "react";
import SingleItem from "./SingleItem";

const Items = ({ items }) => {
  return (
    <aside className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} {...item} />;
      })}
    </aside>
  );
};

export default Items;
