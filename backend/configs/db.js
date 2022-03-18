const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true //, useCreateIndex: true
        })
        console.log('DB Connected !!!');

    } catch (error) {
        console.log('Error Connect: ' + error.message);
        process.exit(1);
    }
}

module.exports = {
    connectDB
}