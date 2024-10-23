import express from "express";
import multer from "multer";
import moment from "moment";
import cors from "cors";
import {Low} from "lowdb";
import {JSONFile} from "lowdb/node";
import {v4 as uuidv4} from "uuid";
const defaultData = {user: [], products: []};
const db = new Low(new JSONFile("db.json"), defaultData);
await db.read();
console.log(process.env.XXX_API_KEY);


const upload = multer();

let whiteList = ["http://localhost:5500", "http://127.0.0.1:5500"];
let corsOptions = {
  credentials: true,
  origin(origin, callback){
    if(!origin || whiteList.includes(origin)){
      callback(null, true);
    }else{
      callback(new Error("不允許連線"));
    }
  }
}

const app = express();
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("首頁");
});




app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
  
})

"雞雞"