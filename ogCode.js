// import React, { useState, useEffect } from "react";
// import Header from "./Header";
// import ListingsContainer from "./ListingsContainer";

// function App() {
// const [listing, setListing] = useState([])

// function clickRemove(id) {
//   const newListing = listing.filter((list) => list.id !== id)
//   setListing(newListing)
// }


//   useEffect(() => {
//     fetch("http://localhost:6001/listings")
//       .then((r) => r.json())
//       .then(setListing);
//   }, []);



//   return (
//     <div className="app">
//       <Header />
//       <ListingsContainer 
//       listing={listing}
//       onClickRemove={clickRemove}
//       />
//     </div>
//   );
// }

// export default App;
// /////////////////////////////////////////////
// import React from "react";
// import Search from "./Search";

// function Header() {
//   return (
//     <header>
//       <h1>
//         <span className="logo" role="img">
//           ☮
//         </span>
//         gregslist
//       </h1>
//       <Search />
//     </header>
//   );
// }

// export default Header;
// ///////////////////////////////////////////////
// import React from "react";
// import ListingCard from "./ListingCard";

// function ListingsContainer({ listing, onClickRemove }) {
//   return (
//     <main>
//       <ul className="cards">
//         {listing.map((list) => (
//           <ListingCard  
//           key={list.id}
//           list={list}
//           onClickRemove={onClickRemove}
//           />
//         ))}
//       </ul>
//     </main>
//   );
// }

// export default ListingsContainer;
// //////////////////////////////////////////////////////
// import React, { useState } from "react";


// function ListingCard({
//   list: {image, description, location, id},
//   onClickRemove
// }) {


// const [favorite, setFavorite] = useState(false)


// function handleDeleteClick() {
//   fetch(`http://localhost:6001/listings/${id}`, {
//     method: "DELETE",
//   })
//   onClickRemove(id)
// }



//   return (
//     <li className="card">
//       <div className="image">
//         <span className="price">$0</span>
//         <img src={image} alt={image} />
//       </div>
//       <div className="details">

//         {favorite ? (
//           <button 
//          onClick={() => setFavorite(false)}
//           className="emoji-button favorite active">★</button>
//         ) : (
//           <button 
//           onClick={() => setFavorite(true)}
//           className="emoji-button favorite">☆</button>
//         )}

//         <strong>{description}</strong>
//         <span> · {location}</span>
//         <button 
//         onClick={handleDeleteClick}
//         className="emoji-button delete">🗑</button>
//       </div>
//     </li>
//   );
// }


// export default ListingCard;
// //////////////////////////////////////////////////////
// import React from "react";

// function Search() {
//   function handleSubmit(e) {
//     e.preventDefault();
//     console.log("submitted");
//   }

//   return (
//     <form className="searchbar" onSubmit={handleSubmit}>
//       <input
//         type="text"
//         id="search"
//         placeholder="search free stuff"
//         value={""}
//         onChange={(e) => console.log(e.target.value)}
//       />
//       <button type="submit">🔍</button>
//     </form>
//   );
// }

// export default Search;
// /////////////////////////////////////////////////