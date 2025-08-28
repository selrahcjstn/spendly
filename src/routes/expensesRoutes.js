import { createExpenses, getExpensesByID, getUserExpenses, updateExpenses, removeExepensesByID} from "../controller/expensesController.js";
import protect from "../middleware/protect.js";
import checkAmount from "../middleware/checkAmount.js";
import validateExpenseOwnership from "../middleware/validateExpenseOwnership.js";
import express from "express";

const expensesRoute = express.Router();

expensesRoute.post("/create", protect, checkAmount, createExpenses);
expensesRoute.get("/search/:expensesID", protect, getExpensesByID);
expensesRoute.get("/transactions", protect, getUserExpenses);
expensesRoute.patch("/edit/:id", protect, validateExpenseOwnership, updateExpenses);
expensesRoute.delete("/remove/:id", protect, validateExpenseOwnership, removeExepensesByID);

export default expensesRoute;