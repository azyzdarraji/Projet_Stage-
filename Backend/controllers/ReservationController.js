const Reservation = require("../models/ReservationModel")
const Trajectoire = require("../models/TrajectoireModel");
const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


// Create new Reservation

exports.newReservation = catchAsyncErrors(async(req, res, next) => {

    const { reservationItems, paymentInfo, totalPrice } = req.body

    const reservation = await Reservation.create({
        orderItems,
        paymentInfo,
        totalPrice,
        user: req.user._id
    })
    res.status(201).json({
        success: true,
        reservation,
    })
})




// get single Reservation 

exports.getSingleReservation = catchAsyncErrors(async(req, res, next) => {

    const reservation = await Reservation.findById(req.params.id).populate("user", "name email")

    if (!reservation) {
        return next(new ErrorHander("Reservation not found with this is ID", 404))
    }


    res.status(200).json({
        success: true,
        reservation
    })

})

// get Logged in user Orders

exports.myReservations = catchAsyncErrors(async(req, res, next) => {

    const reservations = await Reservation.find({ user: req.user._id })


    res.status(200).json({
        success: true,
        reservations
    })

})


// get ALL Reservations (ADMIN)

exports.getAllReservations = catchAsyncErrors(async(req, res, next) => {

    const reservations = await Reservation.find();

    let totalAmount = 0;

    reservations.forEach((reservation) => {
        totalAmount += reservation.totalPrice
    });

    res.status(200).json({
        success: true,
        totalAmount,
        reservations,
    })
})


// Update Reservation Status -- (ADMIN)

exports.updateReservation = catchAsyncErrors(async(req, res, next) => {

    const reservation = await Reservation.findById(req.params.id);

    if (!reservation) {
        return next(new ErrorHander(" Reservation not found with this Id", 404))
    }

    if (reservation.reservationStatus === "Confirmed") {
        return next(new ErrorHander("You have already Confirmed this Reservation", 400))
    }

    reservation.reservationItems.forEach(async(el) => {
        await updateNumberPlace(el.Trajectoire, el.numberPlace);
    })

    reservation.reservationStatus = req.body.status;


    await reservation.save({ ValidateBeforeSave: false })

    res.status(200).json({
        success: true,
    })
})

async function updateNumberPlace(id,NumberReservation) {

    const trajectoire = await Trajectoire.findById(id)

    NumberReservation=Reservation.reservationItems.numberOfPlace.numberAdulte + Reservation.reservationItems.numberOfPlace.numberEnfant

    trajectoire.NumberOfPlacesAvailable -= Reservation.reservationItems.numberOfPlace.numberAdulte

    trajectoire.NumberOfPlacesAvailable -= Number

    await trajectoire.save({ validateBeforeSave: false })
}

// delete Order ----ADMIN

exports.deleteOrder = catchAsyncErrors(async(req, res, next) => {

    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHander("Order not found with this Id", 404))
    }
    await order.remove()

    res.status(200).json({
        success: true,
    })
})