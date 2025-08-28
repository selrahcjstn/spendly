import Expenses from "../models/Expenses.js";

export const createExpenses = async (req, res) => {
    try {
    const {name, date, amount, label} = req.body;

    const parsedAmount = parseFloat(amount);
    const amountInCents = Math.round(parsedAmount * 100);

    const expenses = new Expenses({
        name, 
        date: new Date(date), 
        amountInCents: amountInCents, 
        label,
        user: req.u.id
    })
    await expenses.save();

    res.status(201).json({message: "New transaction created!", data: expenses});

    } catch (error) {
        res.status(500).json({message: error.message});
    }
   
}

export const getExpensesByID = async (req, res) => {
    try {
        const {expensesID} = req.params;
    
        const isFound = await Expenses.findById(expensesID);
        if(!isFound){
            return res.status(404).json({message: "Expenses doesn't exist!"});
        }

        res.status(200).json({message: "Retrieved Successfully", data: isFound});
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const getUserExpenses = async (req, res) => {
    try {
        const userID = req.u.id;

        const transactions = await Expenses.find({user: userID});
        if(!transactions){
            return res.status(404).json({message: "No transaction yet"})
        }

        res.status(200).json({message: "Transactin History", data: transactions});

    } catch (error) {
        
    }
}

export const updateExpenses = async (req, res) => {
    try {
        const update = req.body;
        const expense = await Expenses.findByIdAndUpdate(req.expense._id, update, {new: true});

        if(!expense){
            return res.status(404).json({
                success: false,
                message: "User not found or Expenses target ID is not valid"
            })
        }

        res.status(201).json({
            success: true,
            message: "Update Successful!",
            data: expense
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}

export const removeExepensesByID = async (req, res) => {
    try {
        const expenseID = req.params.id

        const expense = await Expenses.findByIdAndDelete(expenseID);
        
         if(!expense){
            return res.status(404).json({
                success: false,
                message: "User not found or Expenses target ID is not valid"
            })
        }

        res.status(200).json({
            success: true,
            message: "Delete Successful!",
            data: expense
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message
        })
    }
}