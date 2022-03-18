const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = new mongoose.Schema({
    name: { type: String, trim: true, unique: true },
    email: { type: String, trim: true, unique: true, required: true },
    password: {
        type: String, trim: true, required: true,
        minlength: [6, 'Password must be at least 6 characters']
    },
    status: String
}, { timestamps: true }
);

schema.pre('save', function (next) {
    const string = bcrypt.genSaltSync(10);
    this.password = bcrypt.hashSync(this.password, string);
    next();
})
module.exports = mongoose.model('user', schema); 