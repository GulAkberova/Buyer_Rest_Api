const { query } = require("express");
const { product } = require("../models/Product");

const productController = {
  getAll: (req, res) => {

    let {limit,sort, startDate,endDate}=req.query
  
    if (!startDate) {
        startDate = new Date(0);
    } else {
        startDate = new Date(startDate);
    }

    if (!endDate) {
        endDate = new Date();
    } else {
        endDate = new Date(endDate);
    }
    
    product
      .find({ isDeleted: false,
        date: {
            $gte: startDate,
            $lte: endDate
        }
    })
      .limit(limit)
      .sort({productPrice:sort})
      .populate("categoryId")
      .populate({ path: "buyerId", populate: { path: "buyerAddress" } })
      .exec((err, docs) => {
        if (!err) {
          res.json(docs);
        } else {
          res.status(500).json(err);
        }
      });
  },
  getPost: (req, res) => {
    let newProduct = new product({
      productName: req.body.productName,
      productPrice: req.body.productPrice,
      categoryId: req.body.categoryId,
      buyerId: req.body.buyerId,
      ProductDescription: req.body.ProductDescription,
      isCopleted: false,
      isDeleted: false,
      date: req.body.date,
    });

    newProduct.save(function (err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getById: (req, res) => {
    let id = req.params.id;
    product.findById(id, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getDelete: (req, res) => {
    let id = req.params.id;
    product.findByIdAndDelete(id, { isDeleted: true }, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getPut: (req, res) => {
    let id = req.params.id;
    let updateProduct = new todo({
      _id: id,
      text: req.body.text,
      isDeleted: req.body.isDeleted,
      isCopleted: req.body.isCopleted,
    });

    product.findByIdAndUpdate(id, updateProduct, { new: true }, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getQuery: (req, res) => {
    console.log(query);
  },
};

module.exports = {
  productController,
};
