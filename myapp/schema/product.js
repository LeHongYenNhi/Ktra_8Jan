var mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name_product: String,
    price: Number,
    isdelete: Boolean,
    order: Number,
    product_k: [{
        type: mongoose.Schema.ObjectId,
        ref: 'category'
    }]
});

module.exports = mongoose.model('product', schema);