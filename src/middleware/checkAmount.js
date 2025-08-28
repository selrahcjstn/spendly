const checkAmount = (req, res, next) => {
    const {amount} = req.body;

    const parsedAmount = parseFloat(amount);
    
    if(isNaN(parsedAmount)){
         return res.status(400).json({
            success: false,
            message: "Amount should be a number",
        })
    }

    if(parsedAmount <= 0){
        return res.status(400).json({
            success: false,
            message: "Amount should be greater than or equal to 0",
        })
    }


    next();
}

export default checkAmount;