import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    name: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    postalCode: String,
  },
  { timestamps: true }
);

const Profile = mongoose.model("Profile", profileSchema);
export default Profile; // ✅ default export
