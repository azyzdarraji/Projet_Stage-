const express=require("express")

const{
    testTrajectoire ,
    CreateTrajectoire,
    deleteTrajectoire,
    getTrajectoireDetails,
    updateTrajectoire,
    getAllTrajectoires,
    
} =require('../controllers/TrajectoireController')
const { isAuthenticatedUser, authorizeRoles } = require("../middelwares/auth");


const router = express.Router();

router.route("/test").get(testTrajectoire)

router.route("/trajectoire").get(isAuthenticatedUser, authorizeRoles("admin"),testTrajectoire);

router.route("/admin/newtrajectoire").post(isAuthenticatedUser, authorizeRoles("admin"),CreateTrajectoire);

router.route("/alltrajectoires").get(getAllTrajectoires);


router.route("/admin/deletetrajectoire").delete(isAuthenticatedUser, authorizeRoles("admin"),deleteTrajectoire);

router.route("/admin/updatetrajectoire").put(isAuthenticatedUser, authorizeRoles("admin"),updateTrajectoire);

router.route("/gettrajectoire").get(getTrajectoireDetails);


module.exports = router;
