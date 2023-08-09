import mongoose from 'mongoose';

const { Schema } = mongoose;

const urlSchema = new Schema({
  urlId: {
    type: String,
    required: true
  },
  originalUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  date: {
    type: String,
    default: Date.now,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: false,
    default: null
  }
});

const Urls = mongoose.model('Urls', urlSchema);

export default Urls;