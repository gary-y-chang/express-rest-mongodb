import mongoose from "mongoose";

export const productSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: mongoose.Schema.Types.Decimal128
  },
  {
    collection: 'PRODUCT'
  }
  );  

