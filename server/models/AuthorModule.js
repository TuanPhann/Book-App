import mongoose from "mongoose";

const Schema = mongoose.Schema;

const authorSchema = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    age: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const AuthorModel = mongoose.model("author", authorSchema);

export default AuthorModel;
