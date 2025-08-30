import jwt from "jsonwebtoken";

const protect = (req, res, next) =>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message: "No Token, Not Authorized!"});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.u = decoded;
        
        next();
    } catch (error) {
        return res.status(401).json({message: "Invalid Token!"})
    }
}

export default protect;