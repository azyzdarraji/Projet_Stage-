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
    minLength: [10, "Name of Travel should have more than 10 characters"],
  },
  DepartureCity: {
    type: String,
    required: [true, "Please Enter Departure City"],
    maxlength: [15, "CIN Cannot exceed 8 characters"],
    minlength: [4, "CIN Cannot exceed 8 characters"],
  },
  ArrivalCity: {
    type: String,
    required: [true, "Please Enter Arrival City"],
    maxlength: [15, "CIN Cannot exceed 8 characters"],
    minlength: [4, "CIN Cannot exceed 8 characters"],
  },
  DepartureTimes:{
    type: Date,
    required: [true, "Please Enter Departure Times"],
    default:Date.now()

  },
  ArrivingTimes : {
      type:Date ,
      required: [true, "Please Enter Arriving Times"],
      default:Date.now()
  },
  TypeOftrain : {
      type:Boolean,
      required :[true,"Please Enter Type of Train  Express (true) Or Normal (False)"]
  },


  // NumberOfPlacesAvailable : {

  //   NumberOfPlacesAvailableFristClass :{
  //       type:Number,
  //       required:[true,"Please Enter Number Of Place Avaible  First Class"]
  //   },
  //   NumberOfPlacesAvailableSecondClass :{
  //       type:Number,
  //       required:[true,"Please Enter Number Of Place Avaible  Second Class"]
  //   },

  NumberOfPlacesAvailables : {
      type:Number,
      required:[true ,"Please ENter Number Of Places Avaibles "]
  },

  NumberOfPlacesReserved: {
    type:Number,
    required:[true ,"Please ENter Number Of Places Reserved "],
    default:0
  },

  Price: {
    PriceFirstClass : [
      {
        priceAdulte:{
          type:Number ,
          require:true
      }
    },
    {
      priceEnfant:{
       type:Number ,
       required:true ,
      //  default:Trajectoire.Price.PriceFirstClass.priceAdulte
    }
    },
    {
      priceHandifcape :{
        type:Number, 
        require:true,
        dafault:0
      }
    }
    ],

    PriceSecondClass : [
      {
        priceAdulte:{
          type:Number ,
          require:true
      }
    },
    {
      priceEnfant:{
       type:Number ,
       required:true ,
    
    }
    },
    {
      priceHandifcape :{
        type:Number, 
        require:true,
        dafault:0
      }
    }
    ],
},

});

module.exports = mongoose.model("Trajectoire", TrajectoireSchema);
