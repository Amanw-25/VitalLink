import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    ticketPrice: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

bookingSchema.pre(/^find/, function (next) {
  this.populate("user").populate({ 
    path: "doctor", 
    select: "name email phone photo ticketPrice role specialization qualifications experiences bio about timeSlots reviews averageRating totalRating isApproved appointments" 
  });
  next();
});

const BookingModel = mongoose.model("Booking", bookingSchema);

export default BookingModel;
