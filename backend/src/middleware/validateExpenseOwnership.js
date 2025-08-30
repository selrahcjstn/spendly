import Expenses from "../models/Expenses.js";

const validateExpenseOwnership = async (req, res, next) => {
    const expenseID = req.params.id
    const userID = req.u.id;

    const expense = await Expenses.findOne({user: userID, _id: expenseID});

        if(!expense){
            return res.status(404).json({
                success: false,
                message: "No expenses found!",
            })
        }

    req.expense = expense;
    next();
}

export default validateExpenseOwnership;