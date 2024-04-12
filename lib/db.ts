import mongoose from "mongoose";

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO!);
    } catch(e) {
        throw new Error(`Ошибка подключения к базе данных`);
    }
};

export default connect;
