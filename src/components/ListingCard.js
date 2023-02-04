import React, { useState } from "react";


function ListingCard({
  list: {image, description, location, id},
  onClickRemove
}) {


const [favorite, setFavorite] = useState(false)


function handleDeleteClick() {
  fetch(`http://localhost:6001/listings/${id}`, {
    method: "DELETE",
  })
  onClickRemove(id)
}



  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={image} />
      </div>
      <div className="details">

        {favorite ? (
          <button 
         onClick={() => setFavorite(false)}
          className="emoji-button favorite active">★</button>
        ) : (
          <button 
          onClick={() => setFavorite(true)}
          className="emoji-button favorite">☆</button>
        )}

        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
        onClick={handleDeleteClick}
        className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}


export default ListingCard;