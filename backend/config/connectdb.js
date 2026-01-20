import mongoose from 'mongoose'
const connectdb=async()=>{
   await mongoose.connect(process.env.CONNECTION_STRING);
   console.log("database connected");
   

}
export default connectdb;
