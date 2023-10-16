const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/todoRoute')
const cors = require('cors')

const app = express();

const PORT = 4000;


app.use(express.json());
app.use(cors());
app.use('/api',router);

require('dotenv').config()


mongoose.connect(process.env.DB_URL)
.then(() => {
    console.log('connect to DB')
})
.catch(err => {
    console.log({err : err})
})


app.listen(PORT,() => console.log(`server is listening on ${PORT}`));


