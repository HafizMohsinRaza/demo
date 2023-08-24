const express = require("express");
const mongoose = require('mongoose');
const path = require('path');
const bannersRoutes = require('./routes/banners');

const app = express();

mongoose.connect("mongodb+srv://gaztron:PL7QKJxlbncRc80e@cluster0.jdqnsl0.mongodb.net/gaztron?retryWrites=true&w=majority")
.then(()=>{
  console.log(`Connected to MongoDB`);
})
.catch(() =>{
  console.error("Connection Failed!");
});



app.use(express.json());
app.use("/images", express.static(path.join("backend/images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, PUT, OPTIONS"
  );
  next();
});


app.use("/api/banners", bannersRoutes);

module.exports = app;
