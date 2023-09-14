import dotenv from "dotenv"
import app from "./app"
dotenv.config()
const PORT=process.env.PORT || 3000;

async function start(){
    app.listen(PORT,()=>console.log("SERVER RUNNING"))
}

start();




