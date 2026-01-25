import { useLoaderData } from 'react-router-dom'
import pizza from '../assets/pizza.jpeg'

function RecipeItems() {
    const allRecipes=useLoaderData()
    console.log(allRecipes)
  return (
    <>
    <div className='card-container'>
      {allRecipes.map((recipe)=>(
        <div className='card' key={recipe._id}>
          <img src={pizza} alt={recipe.title} />
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <p>{recipe.instructions}</p>
          <p>{recipe.time}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export default RecipeItems