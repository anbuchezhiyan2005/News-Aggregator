const express = require('express');
const connectDB = require('../server/configs/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const newsRoutes = require('./routes/NewsRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/news', newsRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
