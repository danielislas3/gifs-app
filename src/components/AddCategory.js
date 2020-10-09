import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {


  const [inputValue, setInputValue] = useState("Hola mundo");
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cat) => [...cat, inputValue]);
      setInputValue('')
    }

    console.log(e);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Category</h2>
      <input
        name="cat"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

AddCategory.propTypes={
  setCategories:PropTypes.func.isRequired
}