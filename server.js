const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes'); // Ensure this path is correct
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes); // Ensure it's '/api/users'

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
