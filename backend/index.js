import dotenv from "dotenv";
import express from "express";
import connectdb from "./config/connectdb.js";
import router from "./routes/receipe.js";


dotenv.config();   // load env first

const app = express();
app.use(express.json())
app.use('/recipe',router)//get recipes
connectdb();




const PORT = process.env.PORT || 5000; // fallback port

app.listen(PORT, () => {
  console.log(`The server is started on port ${PORT}`);
});
