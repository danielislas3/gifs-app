import React from "react";
import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  // const categories = ["uno", "dos", "tres"];

  const [categories, setcategories] = useState(["uno", "dos", "tres"]);

  // const handleAdd = (e) => {
  //   setcategories(cats=>[...cats,'nuevo']);
   

  // };
  return (
    <>
      <h2>GifApp</h2>
      <AddCategory setCategories={setcategories}/>
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {categories.map((e, i) => {
          return <li key={e}>{e}</li>;
        })}
      </ol>
    </>
  );
};
