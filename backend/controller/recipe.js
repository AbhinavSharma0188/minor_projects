import Recipe from "../model/recipemodel.js"

const getrecipes=async (req,res)=>{
    const recipes=await Recipe.find()
    return res.status(200).json(recipes)
}
const getrecipe=async (req,res)=>{
    const repice=await Recipe.findById(req.params.id)
    return res.status(200).json(repice);
   

}
const addrecipe=async (req,res)=>{
    try {
        const {title,ingredients,instructions,time}=req.body;
    if(!title||!ingredients||!instructions){
        return res.status(400).json({message:"All fields are required"})


    }

   const newRecipe=await Recipe.create({
    title,ingredients,instructions,time
   })
   return res.status(201).json({newRecipe});
    
        
    } catch (error) {
        console.log(error);
        
    }
    

}
const editrecipe=async (req,res)=>{
   try {
    const {title,ingredients,instructions,time}=req.body
   const recipe=await Recipe.findById(req.params.id)
   if(recipe){
    await Recipe.findByIdAndUpdate(req.params.id,{title,ingredients,instructions,time},{new:true})

   }
   return res.status(200).json(recipe)
    
   } catch (error) {
    console.log("Editrecipe Error");
    
    
   }
}
const deleterecipe=(req,res)=>{
    res.json({message:"hello"})
}
export { addrecipe, deleterecipe, editrecipe, getrecipe, getrecipes }
