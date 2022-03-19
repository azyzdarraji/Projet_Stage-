const express = require("express");


const {CreateReservation} =require("../controllers/ReservationController")


const { isAuthenticatedUser, authorizeRoles } = require("../middelwares/auth");

const router = express.Router();


router.route("/reservation/new").post(CreateReservation);



module.exports = router;