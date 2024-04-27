import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://tangquocdung0908:quocdung123@cluster0.ktog1me.mongodb.net/food-del')
    .then(() => console.log("DB Connected"));
}