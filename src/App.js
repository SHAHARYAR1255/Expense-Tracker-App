import React , { useState , useEffect } from 'react';
import Recipe from './components/Recipe';
import './App.css';

const App = () =>  {

  const APP_ID = '2c2830cd' ;
  const APP_KEY ='d59eab9ee0a60c46f2ea2f8a5763a42c'	 ;

  const [ recipes , setRecipes ] = useState([]);
  const [ search , setSearch ] = useState('');
  const [query , setQuery ] = useState('chicken');

  useEffect(()=>{
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await  response.json();
    setRecipes(data.hits);
  };
  const  r = recipes.map((recipe) => {
    return(
      <Recipe key={recipe.recipe.label} title ={recipe.recipe.label} img={recipe.recipe.image} cal={recipe.recipe.calories} ingredients={recipe.recipe.ingredients} />
    );
  });

  const updateSearch = e =>{
    setSearch(e.target.value);

  };
  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">search</button>
      </form>
      { r }
      
    </div>
  )
}

export default App;
