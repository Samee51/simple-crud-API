import Product from "../models/product.model";



const getProducts = async (req, res) => {

    try {

        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getProduct  = async (req, res) => {

    try {
        const product = await Product.find(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const postProduct = async (req, res) => {

    try {

        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateProduct =  async (req, res) => {

    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body);


        if (!product) {

            return res.status(404).json({ message: "Product not Found" });
        }

        product = await Product.findById(req.params.id);

        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};


const deleteProduct = async (req, res) => {

    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {

            return res.status(404).json({ message: "Product not Found" });
        }
        res.status(200).json({message:"Product was deleted"})
    } catch (error) {
        res.status(500).json({ message: error.message });
    }

};




export {getProducts , getProduct , postProduct , updateProduct , deleteProduct};

