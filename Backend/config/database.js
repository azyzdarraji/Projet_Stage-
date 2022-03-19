const mongoose=require ("mongoose")
require("dotenv").config({path:'./config/.env'})
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.SNCFTDB)
       console.log('done connexion with data base of SNCFT  ')
    } catch (error) {
        console.log(error)
        
    }

}
module.exports=connectDB