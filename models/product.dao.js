import { productSchema } from './product.js';
import mongoose from 'mongoose';


productSchema.statics = {
    create : function(data, callback) {
        var product = new this(data);
        product.save(callback);
    },
    get: function(query, callback) {
        this.find(query, callback);
    },  
    getById: function(id, callback) {
        this.findById(id, callback);
    },  
    update: function(query, updateData, callback) { 
        this.findOneAndUpdate(query, 
             {$set: updateData},{new: true}, callback);
    },     
    delete: function(query, callback) {    
        this.findOneAndDelete(query, callback);
    }
}

export default mongoose.model('PRODUCT', productSchema);
