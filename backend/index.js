const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
const http = require('http');
const server = http.createServer(app);


const connectDB = require('./db');
connectDB().then(() => {
    server.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}).catch(err => {
    console.log(err);
    console.log('Error connecting to database');
})

const authRouter = require('./routes/auth');
app.use('/auth', authRouter);

const domainRouter = require('./routes/domain');
app.use('/domain', domainRouter);