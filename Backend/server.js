const express = require("express");
const app = express();
const connectDB = require("./config/db");
const cors = require("cors");
const userRouter = require("./routes/UserRoute");
const trajectoireRouter = require("./routes/TrajectoireRoute");
const reservationRouter=require ("./routes/ReservationRoute");


connectDB();

// Middelwares

app.use(cors());
app.use(express.json());
app.use("/api/v1", trajectoireRouter);
app.use("/api/v2", userRouter);
app.use("/api/v3" ,reservationRouter)

const port = 9000;
app.listen(port, console.log(`server runing on port:${port}`));