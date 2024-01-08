var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name_category: String,
    order: Number,
    isdelete: Boolean
});

schema.virtual('category', {
    ref: 'product',
    localField: '_id',
    foreignField: 'product_k'
});

module.exports = mongoose.model('categories', schema);