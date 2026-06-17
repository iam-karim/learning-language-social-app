import mongoose from "mongoose";

export const connectDB = async () => {
    try {
       const conn = await mongoose.connect(process.env.MOGO_URI);
        console.log("Connected to MongoDB: ", conn.connection.host);
    } catch (error) {
        console.error("Error connecting to MongoDB: ", error);
        process.exit(1);// failure exit code 1
    }
}