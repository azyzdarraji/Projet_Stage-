const {body,validationResult} =require ("express-validator")

// user rules
exports.registreRules=[
    body('name',"name is required").notEmpty(),
    body('cin',"Num CIN  is required").notEmpty(),
    body('tel',"Num tel is required").notEmpty(),
    body('email',"enter a valid email").isEmail(),
    body('password',"password at least 6 caracters").isLength({min: 6})
]

// login rules
exports.loginRules = [
    body("email", "enter a valid email").isEmail(),
    body("password", "password at least 6 caracters").isLength({ min: 6 }),
  ];


exports.validator =(req,res , next)=>{

    const error = validationResult (req);
    if (!error .isEmpty()) {
        return res.status(400).send({errors: error.array()})
    }
    next ()
}
