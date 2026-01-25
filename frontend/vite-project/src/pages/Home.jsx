import foodRecipe from '../assets/pizza.jpeg'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import RecipeItems from '../components/RecipeItems'

const Home = () => {
  return (
 <>
 
 <section className='home'>
    <div className='left'>
        <h1>Food Recipe</h1>
        <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et odio rerum, aut sit dolores suscipit itaque sed qui nostrum ullam, aspernatur dolorum maxime vel voluptates eveniet optio obcaecati! Maiores, rerum.</h5>
        <button>Share your recipes</button>
    </div>
    <div className='right'>
        <img src={foodRecipe} height="300px" width="320px" alt="" />

    </div>
     </section>
    <div className='bg'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#d4f6e8" fill-opacity="1" d="M0,96L21.8,80C43.6,64,87,32,131,42.7C174.5,53,218,107,262,138.7C305.5,171,349,181,393,154.7C436.4,128,480,64,524,48C567.3,32,611,64,655,90.7C698.2,117,742,139,785,128C829.1,117,873,75,916,64C960,53,1004,75,1047,90.7C1090.9,107,1135,117,1178,112C1221.8,107,1265,85,1309,69.3C1352.7,53,1396,43,1418,37.3L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"></path></svg>
    </div>
    <div className='recipe'>
        <RecipeItems/>
    </div>


 </>
  )
}

export default Home