// models/Task.js
import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ['High', 'Medium', 'Low'], default: 'Low' },
  completed: { type: Boolean, default: false },
  completedAt: { type: Date }, // ← timestamp for completed tasks
}, { timestamps: true });

export default mongoose.model('Task', TaskSchema);
