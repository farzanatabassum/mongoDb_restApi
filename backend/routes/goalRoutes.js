const express=require('express');
const { getGoals, setGoals, updateGoals, deleteGoals } = require('../controllers/goalControllers');
const router=express.Router();
router.route('/').get(getGoals).post(setGoals);
// router.get('/',getGoals)
// router.post('/',setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals);
// router.put('/:id',updateGoals)
// router.delete('/:id',deleteGoals)
module.exports=router;