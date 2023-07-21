const express = require('express');
const PORT = 5000;
const app = express();
const goalRoutes = require('./routes/goalRoutes')

app.use('/api/goals/', goalRoutes)

app.listen(PORT, ()=> {
    console.log(`listening on port ${PORT}`);
})