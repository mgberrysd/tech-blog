const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Users can have many posts
User.hasMany(Post, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Posts belong to a single user via user id
Post.belongsTo(User, {
  foreignKey: 'user_id'
});

// Users can have many comments
User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comments belong to a single user through user id
Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

// Posts can have many comments
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE'
});

// Comments belong to a single post through post id
Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

module.exports = { User, Post, Comment };
