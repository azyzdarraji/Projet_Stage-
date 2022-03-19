const mongoose = require('mongoose')

const ReservationSchema = new mongoose.Schema({

    
    reservationItems: [{
    
        numberOfPlace: {
           numberAdulte:{
            type: Number,
            required: true
           },
           numberEnfant:{
            type: Number,
            required: true
           }
        },
        trajectoire: {
            type: mongoose.Schema.ObjectId,
            ref: "Trajectoire",
            required: true
        }
    }],

    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true
        }

    },

  
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    reservationStatus: {
        type: String,
        required: true,
        default: "Processing"
    },

})

module.exports = mongoose.model("Reservation", ReservationSchema)