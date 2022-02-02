import React, { useState } from "react";

function PlantCard({ plantName, image, price, id, plant, onDeletePlant}) {

  const [stock, setStock] = useState(true)

  function changeStock(){
    setStock(stock=> !stock)
  }

  function handleDelete(){
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => onDeletePlant(plant));
  }

  return (
    <li className="card" id={id} >
      <img src={image} alt={plantName} />
      <h4>{plantName}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={changeStock}>In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
        <button onClick={handleDelete}>Delete Plant</button>
    </li>
  );
}

export default PlantCard;
