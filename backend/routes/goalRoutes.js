const express = require('express');
const router = express.Router();
const { 
    getGoals, 
    createGoal, 
    updateGoal, 
    deleteGoal 
} = require('../controllers/goalControl')


router.route('/').get(getGoals).post(createGoal)
router.route('/:id').put(updateGoal).delete(deleteGoal)

/*
router.get('/', getGoals)

router.post('/', createGoal)

router.put('/:id', updateGoal)

router.delete('/:id', deleteGoal)

*/

module.exports = router