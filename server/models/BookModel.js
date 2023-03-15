import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    category: {
      type: String,
      require: true,
    },
    authorId: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const BookModel = mongoose.model("book", bookSchema);

export default BookModel;
