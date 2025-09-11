/* abhi isme direct node karke run nai karni hoti hai file.
    Jo package.json file hai usme scripts me jaake 
    
    test waale ko dev/start naam do, jo existing command hai usko
    erase kardo and phir command line me aake npm run dev/start
    karo.*/

    /*Also write the "type" = "module" above the scripts part
      so that ile configures your project to use ES Modules (ESM) by default for files ending in .js.
      This allows you to use the modern import and export syntax for managing 
      code dependencies.*/


import dotenv from "dotenv";

// import express from "express"; --> Commented as we made app.js

// Now that we have writtenexpress code in the different file we have to import the
// different file in here.

import app from "./app.js";

dotenv.config({
  path: "./.env",
});

// imported connectDB to use it in here.
import connectDB from "./db/index.js"

// Previous videos whose content is not used furthur.
// let database = process.env.database;

// let Uname = process.env.user;

// console.log("Env value: ", database);

// console.log("Env value:", Uname);

// console.log("This is server learning happening");



// ____________________________________________________________________

// Gives all the functionality of express to this variable app.
// const app = express(); --> its commented as we created app.js



// Run from the extracted port or on 3000.
const port = process.env.PORT || 3000;




// Will send this according to the url '/'
// app.get("/", (req,res) => {
//   res.send("Hello World!");
// }); --> Commented as we created the app.js 


// Will send this according to the url '/instagram'
// app.get("/instagram", (req,res) => {
//   res.send("Instagram by mark fuckerberg");
// }); --> Commented as we created the app.js



// Binding the server to the specified port
// This connectDB is a const var which has async function.
// We learnt async implicitly returns a promise, thats why we are doing
// .then() and .catch() in this connectDB here.
connectDB()
.then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
  })
})
.catch((err) => {
  console.error("MongoDB connection error", err);
  process.exit(1);
})