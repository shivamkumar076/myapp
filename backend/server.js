require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/myapp';

mongoose.connect(MONGO_URI)
  .then(() => console.log('✅ MongoDB connected successfully11'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const UserSchema = new mongoose.Schema({ name: String });
const User = mongoose.model('User', UserSchema);

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.post('/api/users', async (req, res) => {
  const newUser = new User({ name: req.body.name });
  await newUser.save();
  res.json(newUser);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
