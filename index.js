const express = require('express');
const dotenv = require('dotenv');
const postsRoutes = require('./routes/postsRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/posts', postsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Blog API');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});