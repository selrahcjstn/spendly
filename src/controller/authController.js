import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const register = async (req, res) => {
    const {email, password, firstName, lastName, middleName, birthDate} = req.body;

    console.log(email);
    
    //check email
    const emailFound = await userModel.findOne({email});
    if(emailFound){
       return res.status(409).json({message: "Email arleady registered!"})
    }

    //hash passowrd
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new userModel({
        email,
        password: hashedPassword,
        firstName,
        lastName,
        middleName,
        birthDate: new Date(birthDate)
    })

    await user.save();

    res.status(201).json({
        message: "Account successfully created!",
        data: user
    })
}

export const login = async (req, res) => {
    try {
         const {email, password} = req.body;
        
        const userFound = await userModel.findOne({email}).select("+password");

        //check if email exist
        if(!userFound){
            return res.status(404).json({message: "Email is not registered!"})
        }

        //check password
        const userPassword = await bcrypt.compare(password, userFound.password);
        if(!userPassword){
            return res.status(401).json({message: "Incorrect Password!"});
        }
        
        const token = generateToken(userFound._id);
        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        });

        res.status(200).json({message: "Login Successful!"})
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const updateUserInfo = async (req, res) => {
    const id = req.params.id;
    const update = req.body;

    const result = await userModel.findByIdAndUpdate(id, update, { new: true, runValidators: true  });
    if(!result){
        return res.status(404).json({
            success: false,
            message: "User not found"
        })
    }

    res.status(201).json({
        success: true,
        message: "Successfully updated!",
        data: result
    })
}