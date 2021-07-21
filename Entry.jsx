import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
      <div >
      <img className="poke-img" src={props.img} alt="pokemon_img" />

      </div>
     
        <span>{props.name}</span>  
      {/* <dd>{props.description}</dd> */}
      
      <div >
      <img className="evolve-img" src={props.Evolutions} alt="evolve_img" />

      </div>
      
      </dt>
      <dd>{props.description}</dd>

    </div>
  );
}

export default Entry;
