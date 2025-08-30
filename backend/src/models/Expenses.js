import mongoose from "mongoose";

const expensesSchema = new mongoose.Schema({
    name: {type: String, required: true},
    date: {type: Date, required: true},
    amountInCents: {type: Number, required: true},
    label: {type: String, maxlength: 30},

    //Reference to User
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "userModel",
        required: true
    }

}, {timestamps:true})

const Expenses = mongoose.model("Expenses", expensesSchema)

export default Expenses;