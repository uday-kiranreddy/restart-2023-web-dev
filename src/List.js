import React from "react";

function List({ people }) {
  const { name, image ,age} = people;
  return (
    <>
      <img className="img" src={image} alt="" />
      <h2>{name}</h2>
      <p>{age}</p>
    </>
  );
}

export default List;
