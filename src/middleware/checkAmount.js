const checkAmount = (req, res, next) => {
    const {amount} = req.body;
    
    if(isNaN(amount)){
         return res.status(400).json({
            success: false,
            message: "Amount should be a number",
        })
    }

    if(amount >= 0){
        return res.status(400).json({
            success: false,
            message: "Amount should be greater than or equal to 0",
        })
    }


    next();
}

export default checkAmount;