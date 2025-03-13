const express = require("express");
const connectDB = require("./models/connect");
const cors = require("cors");
const userRouter = require("./routes/userRoutes");
const notesRouter = require("./routes/noteRoutes");
const defaultRouter = require("./routes/defaultRoute");
const cron = require('node-cron');
const request = require('request');


//initialize express
const app = express();

//create db connection
connectDB();

app.use(cors());
app.use(express.json());


// //
app.use("/api", userRouter);
app.use("/api", notesRouter);
app.use("", defaultRouter);


cron.schedule("* * * * *", () =>
{
    console.log("Sending scheduled request");
    request('https://hack-o-rama.onrender.com/ping', function (error, response, body)
    {
        if (!error && response.statusCode == 200)
        {
            console.log('im ok');
            // console.log(body) // Show the HTML for the Google homepage.
        }
    });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () =>
{
    console.log(`⚡Server is running on port ${PORT}`);
});
