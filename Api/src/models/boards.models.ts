import { Schema, model } from 'mongoose';

const boardSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Board', boardSchema);
