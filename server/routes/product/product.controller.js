const { validateCreateProduct } = require("../../modules/validaters");
const _ = require("lodash");
const Product = require("../../modules/product.module");

const createProduct = async (req, res) => {
  let productInfo = _.pick(req.body, [
    "title",
    "description",
    "image",
    "categories",
    "size",
    "color",
    "price",
  ]);
  const newProduct = new Product(productInfo);

  const productSaved = await newProduct.save();
  res.status(201).json({
    title: productSaved.title,
    description: productSaved.description,
    image: productSaved.image,
    categories: productSaved.categories,
    size: productSaved.size,
    color: productSaved.color,
    price: productSaved.price,
  });
};

const updateProduct = (req, res) => {
  let productInfo = _.pick(req.body, [
    "title",
    "description",
    "image",
    "categories",
    "size",
    "color",
    "price",
  ]);
  Product.findByIdAndUpdate(req.params.id, productInfo)
    .then((productUpdated) => res.status(200).json(productUpdated))
    .catch((error) => res.status(404).json(error.message));
};

const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.status(200).json("product has been deleted..."))
    .catch((error) => res.status(404).json(error.message));
};
const getAllProduct = (req, res) => {
  Product.find({})
    .sort({ date: -1 })
    .then((products) => {
      if (products.length !== 0) return res.status(200).json(products);
      else {
        throw error();
      }
    })
    .catch(() => res.status(404).json("there is no product "));
};
const getProdct = (req, res) => {
  Product.findById(req.params.id)
    .then((products) => res.status(200).json(products))
    .catch((error) => res.status(404).json(error.message));
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getProdct,
};
