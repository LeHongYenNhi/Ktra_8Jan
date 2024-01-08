var express = require('express');
var router = express.Router();
var modelProduct = require('../models/product');
const { model } = require('mongoose');
var responseData = require('../helper/responseData');

router.get('/', async function(req, res, next) {
    console.log(req.query);
    var allProduct = await modelProduct.getall(req.query);
    responseData.responseReturn(res, 200, true, allProduct);
});

router.post('/add', async function(req, res, next) {
    var product = await modelProduct.getByName(req.body.name_product);
    if (product) {
        responseData.responseReturn(res, 404, false, "product da ton tai");
    } else {

        const newproduct = await modelProduct.createproduct({
            name_product: req.body.name_product,
            price: req.body.price,
            isdelete: req.body.isdelete,
            order: req.body.order
        })
        responseData.responseReturn(res, 200, true, newproduct);
    }
});

router.get('/:id', async function(req, res, next) {
    try {
        var product = await modelProduct.getOne(req.params.id);
        responseData.responseReturn(res, 200, true, product);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay product");
    }
});

router.put('/edit/:id', async function(req, res, next) {
    try {
        var product = await modelProduct.findByIdAndUpdate(req.params.id, req.body, res.send('Product udpated.'));
        responseData.responseReturn(res, 200, true, product);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay product");
    }
});

router.put('/delete/:id', async function(req, res, next) {
    try {
        var product = await modelProduct.findByIdAndUpdate(req.params.id, req.body.isdelete = "true", res.send('xoa thanh cong'));
        responseData.responseReturn(res, 200, true, product);
    } catch (error) {
        responseData.responseReturn(res, 404, false, "khong tim thay product");
    }
});

module.exports = router;