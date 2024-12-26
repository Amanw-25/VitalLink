import User from "../models/UserSchema.js";

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