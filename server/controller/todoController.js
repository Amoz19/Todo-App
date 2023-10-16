const Todo = require('../models/TodoModel');

const getTodo = async (req,res) => {
    const getTodo = await Todo.find();
    res.json(getTodo);
}

const addTodo = async (req,res) => {
    const addTodo = new Todo({
        description : req.body.description
    })

    try{
        const savePost = await addTodo.save();
        res.json(savePost);
    }catch(err){
        res.json({message : err});
    }
   
}

const deleteTodo = async (req,res) => {
    try {
        const deleteTodo = await Todo.deleteOne({_id:req.params.postId});
        res.json(deleteTodo);
    } catch (error) {
        res.json({message : `${error}`})
    }
   

}

const updateTodo = async (req,res) => {
    try {
        const updateTodo = await Todo.updateOne(
            {_id:req.params.postId},
            {$set:{description : req.body.description}});
        res.json(updateTodo);
    } catch (error) {
        res.json({message : `${error}`})
    }
}

module.exports = {
    getTodo,
    addTodo,
    deleteTodo,
    updateTodo
}