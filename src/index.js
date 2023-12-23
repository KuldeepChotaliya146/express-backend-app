import app from "./app.js";
import connectDB from "./db/connect.js";
import dotenv from "dotenv";

dotenv.config({
  path: './.env'
})

connectDB()
.then(() => {
  const port = process.env.PORT || 3000
  app.listen(port, () => {
    console.log("Server running on", port);
  })

  app.get('/', (req, res) => {
    res.send('Welcome to Express app!')
  })
})
.catch((err) => {
  console.log("DB connection failed!", err);
})