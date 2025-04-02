const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const register = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ message: "Tous les champs sont requis" });
    }

  
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });
    await user.save();
    res.status(201).json({ message: "Utilisateur créé avec succès" });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Erreur lors de la création de l'utilisateur" });
  }
};
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
 
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

  
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }


    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res
      .status(200)
      .json({
        userId: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        token,
        message: "User logged in successfully",
      });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const getUser = async (req, res) => {
  try {
    const userId = req.user.userId; 

    const user = await User.findById(userId).select('firstName lastName email');

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    });
  } catch (error) {
    console.error('Error in getUser:', error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
module.exports = { register, login , getUser };
