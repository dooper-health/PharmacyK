 import mongoose from "mongoose";

const sessionSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    mobile: { type: String, required: true },
    token: { type: String, required: true, unique: true },

    signupStep: { type: Number, default: 0 },
    signupCompleted: { type: Boolean, default: false },

    isActive: { type: Boolean, default: true },
    lastActivity: { type: Date, default: Date.now },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

export default function createSessionModel(connection) {
  // Prevent model overwrite in case of hot reloads
  return connection.models.Session || connection.model("Session", sessionSchema);
}
