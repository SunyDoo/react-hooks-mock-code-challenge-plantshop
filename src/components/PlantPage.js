import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlant, setSearchPlant] = useState("")

  const plantstoDisplay = plants.filter((plant) => {
    if (searchPlant === "") {
      return true;
    } else {
      return plant.name.toLowerCase().includes(searchPlant)
    }
  })

  

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((plants) => setPlants(plants));
  }, []);

  function handleAddPlant (plantData){
    setPlants([...plants, plantData]);
  }

  function handleDeletePlant (deletedPlant){
    const updatedPlants = plants.filter((plant) => plant.id !== deletedPlant.id);
    setPlants(updatedPlants);
  } 

  return (
    <main>
      <NewPlantForm postNewPlant={handleAddPlant} />
      <Search onSearchChange={setSearchPlant} search ={searchPlant} />
      <PlantList plants={plantstoDisplay} handleDelete={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
