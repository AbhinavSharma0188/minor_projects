import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import MainNavigation from './components/MainNavigation.jsx';
import Home from './pages/Home.jsx';
import axios from 'axios';
const getAllRecipes=async ()=>{
  let allRecipes=[];
  await axios.get("http://localhost:3000/recipe/").then((res)=>{
    allRecipes=res.data;
    
  })
  return allRecipes;

  

}
const router=createBrowserRouter([
   {path:"/",element:<MainNavigation/>,children:[
     {path:"/",element:<Home/>,loader:getAllRecipes}
   ]},
 
  
])
const App = () => {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  )
}

export default App