const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middelwares/catchAsyncErrors");
const Trajectoire = require("../models/TrajectoireModel");


// test
exports.testTrajectoire = catchAsyncErrors(async (req, res, next) => {
  res.send(" Trajectoire test");
});


// Create New Trajectoire (Admin) 


exports.CreateTrajectoire = catchAsyncErrors(async (req, res, next) => {
    const trajectoire = await Trajectoire.create(req.body);
    res.status(201).json({
        success: true,
        trajectoire,
    }); 

  });


  // Get ALL Trajectoires (Admin) 

exports.getAllTrajectoires = catchAsyncErrors(async(req, res,next) => {


    const Trajectoires = await Trajectoire.find();

    res.status(200).json({
        success: true,
        Trajectoires,
    })

});




// update trajectoire (ADMIN)

exports.updateTrajectoire = catchAsyncErrors(async(req, res, next) => {
    let trajectoire = await Trajectoire.findById(req.params.id)

    try {
        const trajectoire= await Trajectoire.findByIdAndUpdate(req.params.id, { $set: {...req.body } })
        res.status(200).json({
            success: true,
            trajectoire
        })
    } catch {
        return next(new ErrorHander("Trajectoire not found", 404));

    }
})


// Delete Trajectoire ( Admin)

exports.deleteTrajectoire = catchAsyncErrors(async(req, res, next) => {
try {
    await Trajectoire.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success: true,
        message: "Trajectoire deleted succefuly"
    })

} catch (error) {
    return next(new ErrorHander("Trajectoire not found", 404));
}
})





//  GET ONE Trajectoire Details

exports.getTrajectoireDetails = catchAsyncErrors(async(req, res, next) => {
    try {
        const trajectoire= await Trajectoire.findById(req.params.id)
        res.status(200).json({
            success: true,
            trajectoire,
                })
    } catch (error) {
    
        return next(new ErrorHander("Trajectoire not found", 404));
    }
    })