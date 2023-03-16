const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const errorHandler = require('./middlewares/errorMiddleware');


dotenv.config();
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(errorHandler);

//Mongodb Connection
connectDB();

const PORT = process.env.PORT || 8080


//API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai", require("./routes/openaiRoutes"));


app.listen(PORT, () => {
    console.log(`The server is Running in ${process.env.DEV_MODE}`.bgMagenta.white);
    console.log(`The server is listening on http://localhost:${PORT}`.bgGreen.white);
})