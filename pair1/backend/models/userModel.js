const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Define a method to handle user signup
userSchema.statics.signup = async function (email, password) {
  const User = this; // "this" refers to the User model

  // Hash the password before saving it to the database
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new user instance
  const newUser = new User({ email, password: hashedPassword });

  // Save the user to the database
  await newUser.save();

  return newUser;
};

// Define a method to handle user login
userSchema.statics.login = async function (email, password) {
  const User = this;

  // Find the user by email
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid email or password");
  }

  // Compare the provided password with the hashed password stored in the database
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error("Invalid email or password");
  }

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
