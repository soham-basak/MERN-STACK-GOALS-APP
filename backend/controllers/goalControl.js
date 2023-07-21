const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel');

// @desc GET goals
// @route /api/goals/
// @access private
const getGoals = asyncHandler (async (req, res) =>{
    const goals = await Goal.find( {user: req.user.id} );
    res.status(200).json(goals);
})

// @desc CREATE goals
// @route POST /api/goals/
// @access private
const createGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Plz add goal')
    }

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })
    res.status(200).json(goal);
})

// @desc UPDATE goals
// @route PUT /api/goals/id
// @access private
const updateGoal = asyncHandler (async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.status(200).json(updatedGoal);
})

// @desc DELETE goals
// @route DELETE /api/goals/id
// @access private
const deleteGoal = asyncHandler (async (req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(404)
        throw new Error('Goal not found')
    }
    await goal.deleteOne()
    res.status(200).json({id: req.params.id});
})


module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};