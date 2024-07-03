import { Schema, model } from "mongoose";

const userSchema = Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },            
    password: {
        type: String,
        minlength: [8, 'Password must be 8 characteres'],
        required: true
    },
    phone: {
        type: String,
        minlength: 8,
        maxlength: 8,
        required: true
    },    
    role: {
        type: String,
        uppercase: true,
        enum: ['DOCTOR', 'TRABAJADOR', 'ADMIN'],
        required: true
    },
    imagesUser: {
        type: [String],
        //required: true    
    }
    
}, {
    versionKey: false
});

export default model('user', userSchema)