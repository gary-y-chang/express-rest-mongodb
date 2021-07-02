import Carts from '../models/cart.dao.js';

export function getUserCartItems(req, res){
    let query = {userId: req.params.uid, status: 1};
    let projection = {_id: 0, cartItems: 1};

    Carts.get(query, projection, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            res.status(200).json(data.cartItems);
        }
    })
}

export function removeAllUserCartItems(req, res){
    let query = {userId: '5f1a3e7911ea43136d1fd0c8'};
    let update = {$set: {'cartItems': []}};
    Carts.update(query, update,  (err, result) => {
        if(err){
            res.status(500).send(err);
        }else{ 
            res.status(200).json(result.cartItems);
        }
    })
}

export function removeUserCartItem(req, res){
    let pid = req.body.productId;
    let query = {userId: '5f1a3e7911ea43136d1fd0c8', 'cartItems.productId': pid};
    let projection =  {_id: 0, cartItems: {$elemMatch: {productId: pid}}};
    Carts.get(query, projection, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            console.log('---------> ' + data.cartItems[0].title + " | " + data .cartItems[0].qty);
            let query = {};
            let update = {};
            if(data .cartItems[0].qty == 1){
                query = {userId: '5f1a3e7911ea43136d1fd0c8'};
                update = {$pull: {cartItems: {productId: pid}}};
            }else{
                let qty = data .cartItems[0].qty - 1;
                query = {userId: '5f1a3e7911ea43136d1fd0c8', 'cartItems.productId': pid};
                update = {$set: {'cartItems.$.qty': qty}};
            }
            Carts.update(query, update,  (err, result) => {
                if(err){
                    res.status(500).send(err);
                }else{ 
                    res.status(200).json(result.cartItems);
                }
            })
        }
    })
}

export function addUserCartItem(req, res){
    let pid =  req.body._id || req.body.productId;
    console.log('PRODUCT ID: ' + pid);
    let newItem = {
        productId: pid,
        title: req.body.title,
        price: req.body.price,
        qty: 1}
    console.log(newItem);

    let query = {userId: '5f1a3e7911ea43136d1fd0c8', 'cartItems.productId': newItem.productId};
    let projection =  {_id: 0, cartItems: {$elemMatch: {productId: newItem.productId}}};
    Carts.get(query, projection, (err, data) => {
        if(err){
            res.status(500).send(err);
        }else{
            //res.status(200).json(data.cartItems);
            let query = {};
            let update = {};
            if(!data){
                console.log('add a new cart item');
                query = {userId: '5f1a3e7911ea43136d1fd0c8'};
                update = {$push: {cartItems: newItem}};
               
            }else{
                console.log('increase qty by 1 on ' + data.cartItems[0].title + " | " + data .cartItems[0].qty);
                let qty = data.cartItems[0].qty + 1;
                query = {userId: '5f1a3e7911ea43136d1fd0c8', 'cartItems.productId': newItem.productId}
                update = {$set: {'cartItems.$.qty': qty}};
            }

            Carts.update(query, update,  (err, result) => {
                if(err){
                    res.status(500).send(err);
                }else{ 
                    res.status(200).json(result.cartItems);
                }
            })
        }
    })



}

export function getAllCarts(req, res){
    Carts.get((err, elements) => {
        if(err){
            res.status(500).send(err);
        }else{
            //res.status(200).json({products: elements});
            res.status(200).json(elements);
        }
    })
}