const { buyer } = require("../models/Buyer");

const buyerController = {
  getAll: (req, res) => {
    buyer
      .find({ isDeleted: false })
      .populate("buyerAddress")
      .exec((err, docs) => {
        if (!err) {
          res.json(docs);
        } else {
          res.status(500).json(err);
        }
      });
  },
  getPost: (req, res) => {
    let newbuyer = new buyer({
      buyerName: req.body.buyerName,
      phoneNumber: req.body.phoneNumber,
      buyerAdress: req.body.buyerAdress,
      isDeleted: false,
      date: req.body.date,
    });

    newbuyer.save(function (err, doc) {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
  getById: (req, res) => {
    let id = req.params.id;
    buyer
      .findById(id)
      .populate("buyerAddress")
      .exec((err, doc) => {
        if (!err) {
          res.json(doc);
        } else {
          res.status(500).json(err);
        }
      });
  },
  getDelete: (req, res) => {
    let id = req.params.id;
    buyer.findByIdAndDelete(
      id,
      { isDeleted: true },
      { new: true },
      (err, doc) => {
        if (!err) {
          res.json(doc);
        } else {
          res.status(500).json(err);
        }
      }
    );
  },
  getPut: (req, res) => {
    let id = req.params.id;
    buyer.findByIdAndUpdate(id,{$set:req.body}, { new: true,runValidators:true }, (err, doc) => {
      if (!err) {
        res.json(doc);
      } else {
        res.status(500).json(err);
      }
    });
  },
};

module.exports = {
  buyerController,
};
