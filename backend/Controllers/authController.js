import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Doctor from "../models/DoctorSchema.js";


const genrateToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await Doctor.findOne({ email });
    }

    if (user) {
      return res.status(400).json({ message:'Email Already Registerd',error: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = await User.create({ email, password: hashedPassword, name, role, gender, photo });
    } else if (role === "doctor") {
      user = await Doctor.create({ email, password: hashedPassword, name });
    }

    await user.save();
    res.status(200).json({
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({ message:error.message,error: "Internal server error" });
  }
};

export const login = async (req, res) => {

  const { email, password } = req.body;
  try {
    let user = null;

    let patient = await User.findOne({ email });
    let doctor = await Doctor.findOne({ email });
    if (patient) {
      user = patient;
    }
    else if (doctor) {
      user = doctor;
    }

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Email or Password is incorrect",
        error: "Invalid credentials" 
      });
    }

    const token = genrateToken(user);
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      message: "User logged in successfully",
      token,
      user: { role, appointments, ...rest },

    });

  }
  catch (error) {
    res.status(500).json({
      message: error.message,
      error: "Internal server error"
    });
  }
};

