const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the post schema
const postSchema = new Schema({
  imageText: {
    type: String,
    required: true
  },
  image:{
   
     type:String
  },
  user: {

      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  likes: {
    type: Array,
    default: [],
  },
});

// Create the Post model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
