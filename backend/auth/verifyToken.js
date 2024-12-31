import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const authenticate = async (req, res, next) => {

  //Get Token from header

  const authToken = req.headers.authorization;

  //Check Token if exists
  if (!authToken || !authToken.startsWith("Bearer")) {
    return res.status(401).json({ message: "No Token, Authorization Denied" });
  }

  try {
    //console.log(authToken);
    const token = authToken.split(" ")[1];

    //Verify Token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userId = decoded.id;
    req.role = decoded.role;

    next();
  }
  catch (error) {

    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token is expired" });
    }
    return res.status(401).json({ message: "Token is not valid" });
  }
}

export const restrict = (roles) => async (req, res, next) => {
  const userId = req.userId;

  let user;

  const patient = await User.findById(userId);
  const doctor = await Doctor.findById(userId);

  if (patient) {
    user = patient;
  }

  if (doctor) {
    user = doctor;
  }

  if (!roles.includes(user.role)) { // if(user.role!=roles) 
    return res.status(403).json({ message: "You are not authorized to access this route" });
  }

  next(); 
}