import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleDelete }) {

  

  
  return (
    <ul className="cards">{
      plants.map((plant) => (
        <PlantCard key={plant.id} id={plant.id} plant={plant} plantName={plant.name} image={plant.image} price={plant.price} onDeletePlant={handleDelete} />
      ))
      }</ul>
  );
}

export default PlantList;
