const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const domainSchema = new Schema({
    domainName: {
        type: String,
        required: true,
        unique: true
    },
    domainId: {
        type: String,
        required: true,
        unique: true
    },
    domainDescription: {
        type: String, 
    },
    domainLogo:{
        type: String,
        required: true
    }
    //in future we will add domain coordinators and mentors here
})

module.exports = mongoose.model('Domain',domainSchema);