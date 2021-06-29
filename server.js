import Props from './config/properties.js';
import { dbConnect } from './config/database.js';
import * as ProductController from './api/product.controller.js';
import router from './api/routers.js'
import express from 'express';

var app = express();
var port = process.env.PORT || Props.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/express/api', router);

app.get("/", function (req, res){
    res.send( "Welcome to REST API using MongoDB, ExpressJS and NodeJS");
})

// call the database connectivity function
dbConnect();

//app.post('/product/add', ProductController.createProduct);

app.listen(port, () =>{
    console.log(`Express app listening on port ${port}!`)
})
