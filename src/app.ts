import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import logger from "./utils/logger"
import router from "./routes"

import connectDb from "../utils/connect"

dotenv.config()

// express config
const app = express()
app.use(morgan("tiny"))
app.use("/api/v1", router)

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  logger.info(`http://localhost:${process.env.PORT}`)
  connectDb()
})
