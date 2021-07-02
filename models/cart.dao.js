import { cartSchema } from "./cart.js";
import mongoose from 'mongoose';

cartSchema.statics = {
    create : function(data, callback) {
        var cart = new this(data);
        cart.save(callback);
    },
    get: function(query, projection, callback) {
        this.findOne(query, projection, callback);
    },  
    update: function(query, update, callback) { 
        this.findOneAndUpdate(query, update, {new: true}, callback);
    },     
    delete: function(query, callback) {    
        this.findOneAndDelete(query, callback);
    }
}

export default mongoose.model('CART', cartSchema);
