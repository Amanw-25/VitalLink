import Doctor from '../models/DoctorSchema.js';

export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedUser = await Doctor.findByIdAndUpdate(id, { $set: req.body }, { new: true });

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
    const updatedUser = await Doctor.findByIdAndDelete(id);

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
    const user = await Doctor.findById(id).select("-password");

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
    const { query } = req.query;
    let doctors;

    if (query) {
      doctors = await Doctor.find({
        isApproved: true,
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { specialization: { $regex: query, $options: 'i' } },
        ]
      }).select("-password");
    } else {
      doctors = await Doctor.find({ isApproved: true }).select("-password");
    }

    res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      data: doctors,
    });

  } catch (error) {
    res.status(500).json({ message: error.message, error: "Internal server error" });
  }
};
