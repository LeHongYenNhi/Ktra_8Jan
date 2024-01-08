var SchemaProduct = require('../schema/product')

module.exports = {
    getall: function() {
        return SchemaProduct.find({ isdelete: "false" }).sort({ order: 1 });
    },
    getByName: function(name) {
        return SchemaProduct.findOne({ name_product: name }).exec();
    },
    createproduct: function(product) {
        return new SchemaProduct(product).save();
    },
    getOne: function(id) {
        return SchemaProduct.findById(id);
    }
}