const pool = require("../db")

//Creating a Todo
const createList = async (req, res) => {
    try {
        const { description } = req.body
        const newTodo = await pool.query("INSERT INTO list (description) VALUES ($1)", [description]);
        res.status(200).json("Item added")
    } catch (error) {
        res.status(400).json(error.message)
        console.error(error.message)
    }
}

//Getting all Todo List
const getAllList = async (req, res) => {
    try {
        const todos = await pool.query("SELECT * FROM list");
        if(todos.rows.length > 0){
            res.status(200).json(todos.rows)
        }else{
            res.status(200).json("No Data")
        }       
    } catch (error) {
        res.status(400).json(error.message)
    }
}

//Getting a Single Todo List
const getSingleList = async (req, res) => {
    try {
        const { id } = req.params
        const singleTodo = await pool.query("SELECT * FROM list WHERE todo_id = $1", [id]);
        res.status(200).json(singleTodo.rows[0]) 
    } catch (error) {
        res.status(400).json(error.message)
    }
}


//Updating a Todo List
const updateList = async (req, res) => {
    try {
        const { id } = req.params
        const { description } = req.body
        const updatedTodo = await pool.query("UPDATE list SET description = $1 WHERE todo_id = $2", [description, id]);
        res.status(200).json("Updated Successfully")
    } catch (error) {
        res.status(400).json(error.message)
    }
}

//Deleting a Todo List
const deleteList = async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM list WHERE todo_id = $1", [id])
        res.status(200).json("List deleted successfully")
    } catch (error) {
        res.status(400).json(error.message)
    }
}
module.exports = { createList, getAllList, getSingleList, updateList, deleteList }