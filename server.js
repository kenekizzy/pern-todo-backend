const express = require("express")

const cors = require("cors")

const pool = require("./db")

const todoRoutes = require("./routes/todoRoutes")

const PORT = 5000

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api", todoRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})