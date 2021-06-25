const { TaskModel } = require('../models/Task');
const taskHandlers = require('../controllers/task_handlers')
const router = require('express').Router();

router.post("/",taskHandlers.createTaskHandler);
router.get("/",taskHandlers.getTasksHandler);
router.get("/:id",taskHandlers.getTaskByIdHandler);
router.put("/",taskHandlers.updateTaskHandler);
router.delete('/:id',taskHandlers.deleteTaskHandler);


module.exports = router;