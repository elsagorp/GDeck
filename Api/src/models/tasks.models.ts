import { Schema, model } from 'mongoose';

const taskSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
      trime: true,
    },
    body: {
      type: String,
      trim: true,
    },
    deckId: {
      type: Schema.Types.ObjectId,
      ref: 'Deck',
      require: true,
      trim: true,
    },
    date: Date,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model('Task', taskSchema);
