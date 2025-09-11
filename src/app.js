// This is done as to make a structure of the project.
// All the primary express code is written here.

import express from "express";
import cors from "cors";

const app = express();

// basic configurations.
app.use(express.json({limit: "16kb"})); //Acts as a middleware, will accept json data with a limit upto 16kb.
app.use(express.urlencoded({extended:true, limit: "16kb"})); //will accept the data from the url with the limit of 16kb.
app.use(express.static("public")); //Will be able to serve the images from the public folder.

// import routes
import healthCheckRouter  from "./routes/healthcheckroutes.js";
// Here we setting a home route like if someone writes this then will go to our written healthCheckRouter.
app.use("/api/v1/healthcheck", healthCheckRouter);

// cors configurations
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173", //What url it is allowed to communicate.
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders:["Content-Type", "Authorization"],
}));

app.get("/", (req,res) => {
    res.send("Swayam here, Pleasure to make your acquantance!");
})


export default app;