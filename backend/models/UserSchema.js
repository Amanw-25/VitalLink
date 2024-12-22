import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number
  },
  photo: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['patient', 'admin'],
    default: "patient"
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other']
  },
  bloodType: {
    type: String
  },
  appointments: [{
    type: mongoose.Types.ObjectId,
    ref: "Appointment"
  }]
}, { timestamps: true });

const UserModel = mongoose.model("User", userSchema);

export default UserModel;