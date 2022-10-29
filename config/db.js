/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/29
 */

let atlasDB = "mongodb+srv://eric:eric@cluster0.dosf3fq.mongodb.net/temp?retryWrites=true&w=majority";

// Database setup
let mongoose = require('mongoose');

module.exports = function(){

    mongoose.connect(atlasDB);
    let mongodb = mongoose.connection;

    mongodb.on('error', console.error.bind(console, 'Connection Error:'));
    mongodb.once('open', ()=>{
        console.log('===> Connected to MongoDB.');
    })

    return mongodb;
}