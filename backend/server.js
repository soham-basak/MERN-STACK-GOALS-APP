const express = require('express');
const colors = require('colors');
const port = process.env.PORT || 5000;
const app = express();
const connectDb = require('./config/db');
const dotenv = require('dotenv').config();
const goalRoutes = require('./routes/goalRoutes')
const errorHandler = require('./middleware/errorMiddleware')

connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals/', goalRoutes)

app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})