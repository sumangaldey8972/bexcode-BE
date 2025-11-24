import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import apiRouter from "./routes/api"

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api", apiRouter)

const port = process.env.PORT;
const mongoURL = process.env.MONGO_URL || "";
const application_name = process.env.APPLICATION_NAME

mongoose.connect(mongoURL)
  .then(() => {
    console.log("Connected to MongoDB Atlas")
    app.listen(port, () => console.log(`${application_name} listening on ${port}`));
  })
  .catch(err => {
    console.log("Failed to connect MongoDB Atlas", err)
    process.exit(1)
  })