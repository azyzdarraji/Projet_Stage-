const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const TrajectoireSchema = new mongoose.Schema({
    num: {
        type:Number,
        required: [true, "Please Enter Number Of Travel"],
      },
  name: {
    type: String,
    required: [true, "Please Enter  Name of Travel"],
    maxlength: [30, "Name of TravelCannot exceed 30 characters"],
    minLength: [8, "Name of Travel should have more than 10 characters"],
  },
  DepartureCity: {
    type: String,
    required: [true, "Please Enter Departure City"],
    maxlength: [8, "CIN Cannot exceed 8 characters"],
    minlength: [4, "CIN Cannot exceed 8 characters"],
  },
  ArrivalCity: {
    type: String,
    required: [true, "Please Enter Arrival City"],
    maxlength: [8, "CIN Cannot exceed 8 characters"],
    minlength: [4, "CIN Cannot exceed 8 characters"],
  },
  DepartureTimes:{
    type: Date,
    required: [true, "Please Enter Departure Times"],

  },
  ArrivingTimes : {
      type:Date ,
      required: [true, "Please Enter Arriving Times"],
  },
  TypeOftrain : {
      type:String,
      required :[true,"Please Enter Type of Train  Express Or Normal "]
  },


  NumberOfPlacesAvailables : {
      type:Number,
      required:[true ,"Please Enter Number Of Places Avaibles "]
  },

  NumberOfPlacesReserved: {
    type:Number,
    required:[true ,"Please Enter Number Of Places Reserved "],
    default:0
  },

  Price: {
    type:Number,
    required:[true ,"Please Enter Price  "],
    
  },
  
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

   
},

);

module.exports = mongoose.model("Trajectoire", TrajectoireSchema);
