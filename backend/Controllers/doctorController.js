import Doctor from "../models/DoctorSchema.js"; // Import the Doctor model
import Booking from "../models/BookingSchema.js";

export const updateDoctor = async (req, res) => {
  // Rename the function to updateDoctor
  const id = req.params.id;

  try {
    const updatedDoctor = await Doctor.findByIdAndUpdate(
      // Use the Doctor model
      id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedDoctor, // Use updatedDoctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update!",
      data: error,
    });
  }
};

export const deleteDoctor = async (req, res) => {
  // Rename the function to deleteDoctor
  const id = req.params.id;

  try {
    await Doctor.findByIdAndDelete(id); // Use the Doctor model

    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete!",
      data: error,
    });
  }
};

export const getSingleDoctor = async (req, res) => {
  // Rename the function to getSingleDoctor
  const id = req.params.id;

  try {
    const doctor = await Doctor.findById(id)
      .populate("reviews")
      .select("-password"); // Use the Doctor model

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "No Doctor Found!",
      });
    }

    res.status(200).json({
      success: true,
      message: "Doctor Found",
      data: doctor, // Use doctor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctor!",
      data: error,
    });
  }
};

export const getAllDoctor = async (req, res) => {
  // Rename the function to getAllDoctors
  try {
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: "approved",
        $or: [
          { name: { $regex: query, $options: "i" } },
          { specialization: { $regex: query, $options: "i" } },
        ],
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: "approved" }).populate("reviews").select(
        "-password"
      ); // Use the Doctor model
    }

    res.status(200).json({
      success: true,
      message: "Doctors Found",
      data: doctors, // Use doctors
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve doctors!",
      data: error.message,
    });
  }
};

export const doctorProfile = async (req, res) => {
  const doctorId = req.user._id;
  try {
    const doctor = await Doctor.findById(doctorId).select("-password");

    if (!doctor) {
      return res.status(400).json({
        success: false,
        message: "User not found"
      });
    }

    const { password, ...rest } = doctor_doc;
    const aappointments = await Booking.find({ doctor: doctorId }).populate("patient");


    res.status(200).json({
      success: true,
      message: "Profile fetched successfully",
      data: user,

    })
  } catch (error) {
    res.status(500).json({
      message: error.message,
      error: "Internal server error"
    });
  }
}