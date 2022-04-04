const {
    default: mongoose
} = require("mongoose")
const bcrypt = require("bcrypt")

let userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
});

userSchema.pre("save", function (next) {
    if (this.isNew || this.isModified("password")) {
        const document = this;
        bcrypt.hash(document.password, 10, (err, hashedPassword) => {
            if (err)
                next(err)
            else {
                document.password = hashedPassword;
                next();
            }
        })
    }
})
module.exports = mongoose.Model("User", userSchema);