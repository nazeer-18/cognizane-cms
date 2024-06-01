const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

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
    },
    domainSkills: [{
        name:{
            type: String,
            required: true
        },
        imageUrl:{
            type: String,
            required: true
        }
    }],
    domainLeads: [{
        post:{
            type: String,
            required: true
        },
        user:{
            type: Schema.Types.ObjectId,
            ref: User
        }
    }]
    //in future we will add domain coordinators and mentors here
})

module.exports = mongoose.model('Domain',domainSchema);