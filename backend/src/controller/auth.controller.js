const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateRefershToken = require('../utils/generateRefershToken');

class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        console.log(email, password);

        if (!email || !password) {
            return res.status(400).json({
                "message": "Email and Password are required",
                "success": false,
            });
        }

        const user = await User.findOne({ email });
        
        if (bcrypt.compare(password, user.password)) {
            const token = generateRefershToken({ _id: user._id, email });
            console.log(token)
            res.cookie("token", token);

            return res.status(200).json({
                "success": true,
                "message": "Login Successful",
                "token": token,
            });
        }
        return res.status(401).json({
            "message": "Invalid Credentials",
            "success": false,
        });
    }

    async signup(req, res) {
        try {
            const { name, email, password } = req.body;
            if (!name.trim() || !email.trim() || !password.trim()) {
                return res.status(400).json({
                    "message": "All fields are required",
                    "success": false,
                });
            }

            const userExists = await User.find({ email });
            console.log(userExists.length ? "t" : "f")
            if (userExists.length) {
                return res.status(400).json({
                    success: false,
                    message: "User already exits"
                });
            }

            const hashedPassword = await bcrypt.hashSync(process.env.BCRYPT_KEY, 10);

            const user = new User({
                name,
                email,
                password: hashedPassword
            })

            const newUser = await user.save();
            console.log(newUser);

            if (newUser?._id) {
                return res.json({
                    success: true,
                    message: "User created successfully",
                    user: newUser
                });
            }
        } catch (err) {
            console.log("Error occurred here", err);
            return err.message;
        }
    }
}

const authController = new AuthController();
module.exports = authController;