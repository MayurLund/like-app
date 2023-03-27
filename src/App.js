import Animalshow from "./Animalshow";
import { useState } from "react";
import "./App.css"
function randomAnimal(){
    const animals=['cat','dog','cow','gator','horse','bird'];
    return  animals[Math.floor(Math.random()*animals.length)]
}

function App(){




    const [animals,setAnimals]=useState([]);

    function handleClick(){
        setAnimals([...animals,randomAnimal()]);
        
        //return console.log(count);
    }

    const renderedAnimals=animals.map((animal,index)=>{

        return <Animalshow type={animal} key={index} />;
    });
    console.log(renderedAnimals);
    

    return(
        <div className="app">
            <button onClick={handleClick} >Add animal</button>
            <div className="animal-list">{renderedAnimals}</div>

        </div>
    )
};

export default App;