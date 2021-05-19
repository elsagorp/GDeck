import { Schema, model } from 'mongoose';

const deckSchema = new Schema({
  title: {
    type: String,
    required: true,
    trime: true,
    unique: true,
  },
  order: {
    type: Number,
    require: true,
    default: 0,
  },
  boardId: {
    type: Schema.Types.ObjectId,
    ref: 'Board',
  },
});

export default model('Deck', deckSchema);
