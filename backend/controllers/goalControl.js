// @desc GET goals
// @route /api/goals/
// @access private
const getGoals = (req, res) =>{
    res.status(200).json({message: 'Hello World'});
}

// @desc CREATE goals
// @route POST /api/goals/
// @access private
const createGoals = (req, res) =>{
    res.status(200).json({message: 'Set goal'});
}

// @desc UPDATE goals
// @route PUT /api/goals/id
// @access private
const updateGoals = (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`});
}

// @desc DELETE goals
// @route DELETE /api/goals/id
// @access private
const deleteGoals = (req, res) =>{
    res.status(200).json({message: `Update goal ${req.params.id}`});
}


module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals
};