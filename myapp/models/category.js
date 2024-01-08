var SchemaCategory = require('../schema/category')

module.exports = {
    getall: function() {
        return SchemaCategory.find({ isdelete: "false" }).sort({ order: 1 });
    },
    getByName: function(name) {
        return SchemaCategory.findOne({ name_category: name }).exec();
    },
    createcategory: function(category) {
        return new SchemaCategory(category).save();
    },
    getOne: function(id) {
        return SchemaCategory.findById(id);
    }
}