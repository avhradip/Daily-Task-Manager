const User = require("../module/user");
const bcrypt = require('bcrypt')

exports.registration = async (req, res) => {
    try {
        const { name, email, number, password, confirmPassword } = req.body

        if (!name) {
            return res.status(400).json({ error: "Name is required" });
        } else if (!email) {
            return res.status(400).json({ error: "Email is required" });
        } else if (!number) {
            return res.status(400).json({ error: "Number is required" });
        } else if (!password) {
            return res.status(400).json({ error: "Password is required" });
        } else if (!confirmPassword) {
            return res.status(400).json({ error: "Confirm password is required" });
        } else if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" });
        }

        const existUser = await User.findOne({ email: email })

        if (existUser) return res.status(409).json({ error: "User alredy exists!" })

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            name, email, number, password: hashPassword
        })

        await newUser.save()

        res.status(200).json(newUser)

    } catch (error) {
        console.log("ERROR", error);
        res.status(500).json({ error: "Server error", message: error })
    }
}