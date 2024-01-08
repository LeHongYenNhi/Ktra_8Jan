var express = require('express');
var router = express.Router();
var modelCategory = require('../models/category');
const { model } = require('mongoose');
var responseData = require('../helper/responseData');

router.get('/', async function(req, res, next) {
    console.log(req.query);
    var allCategory = await modelCategory.getall(req.query);
    responseData.responseReturn(res, 200, true, allCategory);
});

router.post('/add', async function(req, res, next) {
    var category = await modelCategory.getByName(req.body.name_category);
    if (category) {
        responseData.responseReturn(res, 404, false, "category da ton tai");
    } else {

        const newcategory = await modelCategory.createcategory({
            name_category: req.body.name_category,
            isdelete: req.body.isdelete,
            order: req.body.order
        })
        responseData.responseReturn(res, 200, true, newcategory);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        var category = await modelCategory.getOne(req.params.id);
        responseData.responseReturn(res, 200, true, category);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay category");
    }
});

router.put('/edit/:id', async function(req, res, next) {
    try {
        var category = await modelCategory.findByIdAndUpdate(req.params.id, req.body, res.send('Category udpated.'));
        responseData.responseReturn(res, 200, true, category);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay category");
    }
});

router.put('/delete/:id', async function(req, res, next) {
    try {
        var category = await modelCategory.findByIdAndUpdate(req.params.id, req.body.isdelete = "true", res.send('xoa thanh cong'));
        responseData.responseReturn(res, 200, true, category);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay category");
    }
});

module.exports = router;