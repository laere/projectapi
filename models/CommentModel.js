var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentModel = new Schema({
  id: {
    type: Number
  },
  user_id: {
    type: Number
  },
  comment: {
    type: String
  },
  date_created: {
    type: Number
  }
});

module.exports = mongoose.model('Comment', CommentModel);
