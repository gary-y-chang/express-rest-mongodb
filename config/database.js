import mongoose from 'mongoose';
import Props from './properties.js'

export function dbConnect() {

    mongoose.connect(Props.DB_URL);
    mongoose.set('debug', true);
    const db = mongoose.connection;

    db.on('connected', function(){
        console.log('db state: '+ db.readyState); 
        console.log('connected to '+ Props.DB_URL);
    });

    db.on('error', function(err){
        console.log("Mongoose connection has occured "+err+" error");
    });

    db.on('disconnected', function(){
        console.log("Mongoose connection is disconnected");
    });

    process.on('SIGINT', () => {
        mongoose.disconnect().then(() => {
            console.log('Mongoose connection is disconnected due to application termination');  
            process.exit(0);
        });
    });
}