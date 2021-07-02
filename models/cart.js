import mongoose from "mongoose";

export const cartSchema = new mongoose.Schema({
    userId: mongoose.Types.ObjectId,
    createDate: Date,
    status: Number,
    cartItems: [{
      _id: false,
      productId: mongoose.Types.ObjectId,
      title: String,
      price: mongoose.Schema.Types.Decimal128,
      qty: Number
    }]
  },
  {
    collection: 'CART'
  }
  );  
