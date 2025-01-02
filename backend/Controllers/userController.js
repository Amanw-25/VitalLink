import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true });

    res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: updatedUser
    });

  }
  catch (error) {
    res.status(500).json({ message: error.message, error: "Internal server error" });
  }
};

export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await User.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "User Deleted successfully",
    });

  }
  catch (error) {
    res.status(500).json({
      message: error.message,
      error: "Internal server error"
    });
  }
};

export const getSingleId = async (req, res) => {
  const id = req.params.id;

  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });

  }
  catch (error) {
    res.status(500).json({ message: error.message, error: "Internal server error" });
  }
};

export const getAllUser = async (req, res) => {

  try {
    const user = await User.find({}).select("-password");

    res.status(200).json({
      success: true,
      message: "User fetched successfully",
      data: user
    });

  }
  catch (error) {
    res.status(500).json({ message: error.message, error: "Internal server error" });
  }
};

export const getUserProfile = async (req, res) => {
  const userId = req.userId;
  try {
    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: user,

    })
  } catch (error) {
    res.status(500).json({ message: error.message, error: "Internal server error" });
  }
}

export const getMyAppointments = async (req, res) => {
  try {
    // step-1 Reterive appointments from booking 

    const booking = await Booking.find({ user: req.user._id }).populate("doctor");

    // extract doctor id from appointments booking
    const doctorIds = booking.map((item) => item.doctor._id);


    // retireve doctor using doctor id

    const doctors = await Doctor.find({ _id: { $in: doctorIds }}).select('-password');


    res.status(200).json({
      success: true,
      message: "Appointments fetched successfully",
      data: booking,doctors
    });
  }
  catch (error) {
    res.status(500).json({
      message: error.message,
      error: "Internal server error"
    });
  }
}