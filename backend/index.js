import cors from 'cors';
import dotenv from "dotenv";
import express from "express";
import connectdb from "./config/connectdb.js";
import recipeRouter from "./routes/receipe.js";
import userRouter from "./routes/user.js";


dotenv.config();   // load env first

const app = express();
app.use(express.json())
app.use(cors());
app.use('/api',userRouter)
app.use('/recipe',recipeRouter)//get recipes
connectdb();




const PORT = process.env.PORT || 5000; // fallback port

app.listen(PORT, () => {
  console.log(`The server is started on port ${PORT}`);
});
