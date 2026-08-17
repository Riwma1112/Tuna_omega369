import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema(
  {
    name: String,
    password: String,

  },
  { timestamps: true }
);

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);