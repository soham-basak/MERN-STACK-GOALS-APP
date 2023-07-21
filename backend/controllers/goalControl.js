const asyncHandler = require('express-async-handler');

// @desc GET goals
// @route /api/goals/
// @access private
const getGoals = asyncHandler (async (req, res) =>{
    res.status(200).json({message: 'Hello World'});
})

// @desc CREATE goals
// @route POST /api/goals/
// @access private
const createGoal = asyncHandler (async (req, res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('Plz add goal')
    }
    res.status(200).json({message: 'Set goal'});
})

// @desc UPDATE goals
// @route PUT /api/goals/id
// @access private
const updateGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`});
})

// @desc DELETE goals
// @route DELETE /api/goals/id
// @access private
const deleteGoal = asyncHandler (async (req, res) =>{
    res.status(200).json({message: `Delete goal ${req.params.id}`});
})


module.exports = {
    getGoals,
    createGoal,
    updateGoal,
    deleteGoal
};