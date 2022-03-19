const ErrorHander = require("../utils/errorhander");
const catchAsyncErrors = require("../middelwares/catchAsyncErrors");
const User = require("../models/UserModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendToken = require("../utils/jwtToken");
const sendEmail=require("../utils/sendEmail");
const crypto=require("crypto");

exports.test = (req, res) => {
  res.send("test user ok");
};

//  Authentification 

 // 1 Register

exports.registerUser = catchAsyncErrors(async (req, res,next) => {
  const { name, cin,tel, type,role, email, password } = req.body;
  try {
    //check user exist
    const foundUserbyEmail = await User.findOne({ email });
    if (foundUserbyEmail) {
      res.status(400).send({ errors: [{ msg: "email is already exist " }] });
    }
    const foundUserbyCin =await User.findOne({cin});
     if (foundUserbyCin) {
      res.status(400).send({ errors: [{ msg: "National ID Card is already exist " }] });
     }
     const foundUserbyTel =await User.findOne({tel});
     if (foundUserbyTel) {
      res.status(400).send({ errors: [{ msg: "Number Of Phone is already exist " }] });
     }

    const user =  await User.create({
      name,
      cin,
      tel,
      role,
      type,
      email,
      password,
    });
    await user.save();
    // token
    sendToken(user,201,res);

  } catch (error) {
    res.status(500).send(`register error ${error}`);
  }
});





//  Authentification 

// 2 Login

exports.loginUser =catchAsyncErrors(async (req, res,next) => {
    const { cin,tel,email, password } = req.body;

    // Checking if user has given password and email and Cin and tel 
      if (!cin || !tel || !email || !password)
      {
        return next ( new ErrorHander ("Please Enter CIN && Tel && Email && Password",400))
      }

            //check user exist

            const user= await User.findOne({email}).select("+password");
            if (!user) {
              return next (new ErrorHander (" Email Invalid",401))
            }
            const userCin= await User.findOne({cin});
      
            if (!userCin  ) {
              return next (new ErrorHander ("National ID Card  Invalid",401))
            }
            const userTel= await User.findOne({tel});
      
            if (!userTel ) {
              return next (new ErrorHander ("Phone number Invalid",401))
            }
      
            const isPasswordMatched= await user.comparePassword(password) ;
      
            if (!isPasswordMatched) {
              return next (new ErrorHander ("Invalid Password ",401))
            }
      
    try {

      if ( userCin && user && userTel && isPasswordMatched) {

       // token
       sendToken(user,200,res);

    }
   } catch (error) {
      res.status(500).send(`login error ${error}`);
    }
  });




 // Athentification 

// 3 Logout User

exports.logout = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});


// FORGOT PASSWORD 

exports.forgotPassword = catchAsyncErrors(async (req, res, next) => {

   const user= await User.findOne({email:req.body.email})
    if (!user){
      return next (new ErrorHander ("User with given does not exist",400))
    }

 // Get ResetPassword Token
  const resetToken = user.getResetPasswordToken();

     await user.save({validateBeforeSave:false});

  // const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`
  const resetPasswordUrl = `http:/localhost:9000/api/v1/password/reset/${resetToken}`


  const message = `Your password reset token is :- \n\n ${resetPasswordUrl} \n\nIf you have not requested this email then, please ignore it.`;
  try {
    await sendEmail({
      email: user.email,
      subject: `SNCFT Password Recovery`,
      message,
    });

    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully`,
    });
    
  } catch (error) {

    
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    return next(new ErrorHander(error.message, 500));
    
  }

}
)

// Reset Password
exports.resetPassword = catchAsyncErrors(async(req, res, next) => {

  const token=req.user.id 

    // creating token hash
    const resetPasswordToken = crypto
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
    });
     console.log(token) 
    if (!user) {
        return next(
            new ErrorHander(
                "Reset Password Token is invalid or has been expired",
                400
            )
        );
    }

    if (req.body.password !== req.body.confirmPassword) {
        return next(new ErrorHander("Password does not password", 400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user, 200, res);
});

// update User password
exports.updatePassword = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id).select("+password");

  const isPasswordMatched = await user.comparePassword(req.body.oldPassword);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Old password is incorrect", 400));
  }

  if (req.body.newPassword !== req.body.confirmPassword) {
    return next(new ErrorHander("password does not match", 400));
  }

  user.password = req.body.newPassword;

  await user.save();

  sendToken(user, 200, res);
});


// update User Role -- Admin
exports.updateUserRole = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});






// Get all users  (admin)

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send({ users });
  } catch (error) {
    res.status(500).send(` Get All Users error ${error}`);
  }
};

// Delete User (admin)

exports.deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    res.status(200).send("User Deleted Successfully");
  } catch (error) {
    res.status(500).send(` Delete User error ${error}`);
  }
};

// Get One user (admin)

exports.getOneUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    res.status(200).send({
      user,
    });
  } catch (error) {
    res
      .status(500)
      .send(
        `  User does not exist with Id: ${req.params.id}  error delete =  ${error}`
      );
  }
};

// update User Profile

exports.updateProfile = async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    cin: req.body.cin,
    tel: req.body.tel,
    type: req.body.type,
    email: req.body.email,
  };
  const userId = req.user.id;

  try {
    const user = await User.findByIdAndUpdate(userId, {
      $set: { ...newUserData },
    });
    res.send("user  update");
  } catch (error) {
    res
      .status(500)
      .send(
        `  User does not exist with Id: ${req.params.id}  error update =  ${error}`
      );
  }
};

// Get  User Detail (/me)

exports.getUserDetails =
  (
  async (req, res, next) => {
    const user = await User.findById(req.user.id);
    console.log(req.user);

    res.status(200).json({
      success: true,
      user,
    });
  });
