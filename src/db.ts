import {MongoClient} from "mongodb"
import dotenv from "dotenv"
dotenv.config()

const {LOCAL_URI,PROD_URI}=process.env;
let  uri_connection=LOCAL_URI ? LOCAL_URI:PROD_URI as string

export const client = new MongoClient(uri_connection)
export const db=client.db()


