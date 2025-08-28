import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {type: String, required: true, unique:true, trim:true},
    password: {type: String, required: true, trim: true, select: false},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName: {type: String, required: true},
    birthDate: {type: Date, required: true}
}, {timestamps: true})

const userModel = mongoose.model("userModel", userSchema);

export default userModel;