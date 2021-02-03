import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter a title"],
    unique: true,
    trim: true,
    maxLength: [40, "Title max length is 40"],
  },
  description: {
    type: String,
    required: [true, "Please enter a description"],
    trim: true,
    maxLength: [200, "Description max length is 200"],
  },
});

const Note = mongoose.model("Note", NoteSchema);

export default Note;
