const express = require('express');
const port = process.env.PORT || 5000;
const app = express();
const dotenv = require('dotenv').config();
const goalRoutes = require('./routes/goalRoutes')
const errorHandler = require('./middleware/errorMiddleware')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals/', goalRoutes)

app.use(errorHandler);

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
})