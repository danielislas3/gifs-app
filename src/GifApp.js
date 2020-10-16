import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = ({defaultCategories=[]}) => {
  const [categories, setcategories] = useState(defaultCategories);

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory setCategories={setcategories} />
      <hr />

      <ol>
        {categories.map((e, i) => (
          <GifGrid category={e} key={e} />
        ))}
      </ol>
    </>
  );
};
