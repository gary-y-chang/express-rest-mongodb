import Products  from '../models/product.dao.js';

export function createProduct(req, res){
    // let prd = {
    //     title: req.body.title,
    //     description: req.body.description,
    //     price: req.body.price
    // }
    let data = req.body;
    Products.create(data, (err, element) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(201).json(element);
        }
    })
}

export function getAllProducts(req, res){
    Products.get({}, {}, (err, elements) => {
        if(err){
            res.status(500).send(err);
        }else{
            //res.status(200).json({products: elements});
            res.status(200).json(elements);
        }
    })
}

export function getProductById(req, res){
    //req.query.id
    Products.get({_id: req.params.pid}, {}, (err, element) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).json(element);
        }
    })
}

export function updateProduct(req, res){
}

export function deleteProduct(req, res){
}