import mongoose from 'mongoose'

//  import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(
      `Conneted To Mongodb Database ${conn.connection.host}`.bgBlue.white
    );
  } catch (error) {
    console.log(`Errro in Mongodb ${error}`.bgRed.white);
  }
};

export { connectDB }; // Export connectDB function explicitly
