/**
 * Name: Qi Yang  
 * StudentID: 301313468     
 * Date: 2022/10/29
 */

// Import
let mongoose = require('mongoose');

// Create a model class
let todoModel = mongoose.Schema(
    {
        task: String,
        description: String,
        complete: { type: Boolean, default: false }        
    },
    {
        collection: "todo"
    }
);

module.exports = mongoose.model("Todo", todoModel);