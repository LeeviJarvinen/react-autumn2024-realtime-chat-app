import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv'

dotenv.config({path: './config.env'})

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {strict: true, timestamps: true})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALTROUNDS));
    this.password =  await bcrypt.hash(this.password, salt);
});

userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}

export default mongoose.model('Users', userSchema)