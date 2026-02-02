import mongoose from "mongoose";

const achievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  certificate: String,
  date: {
    type: Date,
    required: true
  }
});

export const Achievement = mongoose.model('Achievement', achievementSchema);
