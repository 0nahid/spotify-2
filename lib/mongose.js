import mongoose from "mongoose";

export async function initMongoose() {
    await mongoose.connect(process.env.MONGODB_URI);
}
