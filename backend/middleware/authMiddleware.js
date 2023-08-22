import jwt from "jsonwebtoken";
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

//Protect routes
 const protect = asyncHandler(async (req, res, next) => {
    let token;

    // Read JWT from the cookie
    token = req.cookies.jwt;

    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET);  // decode token
            req.user = await User.findById(decoded.userId).select('-password');  // find user by id
            next(); // call next middleware 
        }catch(error){
            console.error(error);
            res.status(401);
            throw new Error("Not authorized, token failed");    
        }

    }else{
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

// @desc Admin Middleware   

const admin = (req, res, next) => {
    if(req.user && req.user.isAdmin){
        next();     
    }else{
        res.status(401);
        throw new Error("Not authorized as an admin");
    }
};

export { protect, admin}; 