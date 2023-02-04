import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
const [listing, setListing] = useState([])
const [search, setSearch] = useState("")

function clickRemove(id) {
  const newListing = listing.filter((list) => list.id !== id)
  setListing(newListing)
}


  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then(setListing);
  }, []);


const displayedListings = listing.filter((list) => 
list.description.toLowerCase().includes(search.toLowerCase()))


  return (
    <div className="app">
      <Header onSearch={setSearch}/>
      <ListingsContainer 
      listing={displayedListings}
      onClickRemove={clickRemove}
      />
    </div>
  );
}

export default App;
