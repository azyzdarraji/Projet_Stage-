const express=require("express")

const{
    testTrajectoire ,
    CreateTrajectoire,
    deleteTrajectoire,
    getTrajectoireDetails,
    updateTrajectoire,
    getAllTrajectoires
} =require('../controllers/TrajectoireController')


const router = express.Router();


router.route("/trajectoire").get(testTrajectoire);

router.route("/admin/newtrajectoire").post(CreateTrajectoire);

router.route("/admin/alltrajectoires").get(getAllTrajectoires);


router.route("/admin/deletetrajectoire").delete(deleteTrajectoire);

router.route("/admin/updatetrajectoire").put(updateTrajectoire);

router.route("/admin/gettrajectoire").get(getTrajectoireDetails);


module.exports = router;
