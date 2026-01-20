import express from 'express';
import {getrecipes,getrecipe,addrecipe,editrecipe,deleterecipe} from '../controller/recipe.js';
const router=express.Router();
router.get("/",getrecipes)
router.get("/:id",getrecipe)//get recipe from id 
router.post("/",addrecipe)//add recipe
router.put("/:id",editrecipe)//edit recipe
router.delete("/:id",deleterecipe)//delete recipe
export default router