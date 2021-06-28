import e from 'cors';
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