import express from "express"
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

// To handle CORS related issues
app.use(cors({
  origin: process.env.ORIGIN,
  credentials: true
}))

app.use(express.json({ limit: '20kb'})) // To define size of json which can expect
app.use(express.urlencoded({ extended: true, limit: "16kb" })) // To deal with query parameters
app.use(express.static("public")) // To handle static assets
app.use(cookieParser()) // To set and get cookies from client 

export default app