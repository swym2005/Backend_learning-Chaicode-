import mongoose from "mongoose";


// We have used the sync await because it takes time to connect to the DB.

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);      
        console.log("MongoDB Connection succesfull🎯");
    } catch (error) {
        console.error("MongoDB connection error💀", error);
        process.exit(1);
    }
}

export default connectDB;