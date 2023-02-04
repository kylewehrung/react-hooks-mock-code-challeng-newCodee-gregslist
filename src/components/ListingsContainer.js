import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listing, onClickRemove }) {
  return (
    <main>
      <ul className="cards">
        {listing.map((list) => (
          <ListingCard  
          key={list.id}
          list={list}
          onClickRemove={onClickRemove}
          />
        ))}
      </ul>
    </main>
  );
}

export default ListingsContainer;
