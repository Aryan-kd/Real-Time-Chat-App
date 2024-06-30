import mongoose from "mongoose";

const url = "mongodb+srv://aryan123:aryan123@cluster1.guguajf.mongodb.net/";

mongoose
  .connect(url)
  .then(() => console.log("Connect to Db"))
  .catch((e) => console.log("Error: ", e));
