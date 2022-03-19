const Reservation = require("../models/ReservationModel")
const Trajectoire = require("../models/TrajectoireModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require('../middelwares/catchAsyncErrors');

// test Router Reservation 


// test
exports.testTrajectoire = catchAsyncErrors(async (req, res, next) => {
    res.send(" reservation test");
  });
  
// Create new Reservation

exports.CreateReservation = catchAsyncErrors(async(req, res, next) => {

    const { reservationItems, paymentInfo,} = req.body

    const reservation = await Reservation.create({
        reservationItems,
        paymentInfo,
        user: req.user._id,
        totalPrice:req.trajectoire.price * (reservationItems.numberOfPlace.numberAdulte +reservationItems.numberOfPlace.numberEnfant)
    })
    res.status(201).json({
        success: true,
        reservation,
    })
})




