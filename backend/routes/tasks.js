import express from 'express';
import mongoose from 'mongoose';
import auth from '../middleware/auth.js';
import Task from '../models/Task.js';

const router = express.Router();

// GET /api/tasks  => all tasks for logged-in user
router.get('/', auth, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// POST /api/tasks -> create task
router.post('/', auth, async (req, res) => {
  const { title, description, priority } = req.body;
  try {
    const task = new Task({ user: req.user.id, title, description, priority });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// PUT /api/tasks/:id -> update task
router.put('/:id', auth, async (req, res) => {
  const { title, description, priority, completed } = req.body;
  try {
    let task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    task.title = title ?? task.title;
    task.description = description ?? task.description;
    task.priority = priority ?? task.priority;

    if (typeof completed === 'boolean') {
      task.completed = completed;
      task.completedAt = completed ? new Date() : null; // ✅ Set timestamp
    }

    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// DELETE /api/tasks/clear -> clear completed tasks for user
router.delete('/clear', auth, async (req, res) => {
  try {
    await Task.deleteMany({ user: req.user.id, completed: true });
    res.json({ msg: 'Cleared completed tasks' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

// DELETE /api/tasks/:id -> delete specific task
router.delete('/:id', auth, async (req, res) => {
  try {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ msg: 'Invalid task ID' });
    }

    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(401).json({ msg: 'Not authorized' });

    await task.deleteOne(); // ← Use deleteOne instead of remove
    res.json({ msg: 'Task removed' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export default router;
