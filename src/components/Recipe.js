import React from 'react'

const Recipe = (props)=> {
    return(
    <div>
        <h1>{props.title}</h1>
        <p>{props.cal}</p>
        <img src={props.img} alt={props.title} />
        <ol>
           {props.ingredients.map(ingredient =>{
               return(
                   <li>{ingredient.text}</li>
               )
           })}
        </ol>

    </div>



    );
}

export default Recipe;
