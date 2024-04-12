import mongoose from "mongoose";

const { Schema } = mongoose;

const LessonCardSchema = new Schema({
    src: {
      type: String,
      unique: true,
      required: true,
    },
    name: {
      type: String,
      required: true
    },
    age: {
      type: Number,
    },
    text: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
}, { versionKey: false });

const LessonCard = mongoose.models['lesson-card'] || mongoose.model('lesson-card', LessonCardSchema);

export default LessonCard;
