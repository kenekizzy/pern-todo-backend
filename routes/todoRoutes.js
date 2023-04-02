const express = require("express")

const router = express.Router()

const { createList, getAllList, getSingleList, updateList, deleteList } = require("../controllers/todoController")

//Create a Todo
router.post("/addtodo", createList)

//Getting all Todo
router.get("/gettodo", getAllList)

//Getting a Single Todo
router.get("/gettodo/:id", getSingleList)

//Updating a Todo
router.put("/updatetodo/:id", updateList)

//Deleting a Todo
router.delete("/deletetodo/:id", deleteList)

module.exports = router