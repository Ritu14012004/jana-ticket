  import { verifyToken ,generateToken } from "authenticator";
  import { Router } from "express";
const router = Router();

router.post("/signup",(req,res)=>{
    const phoneNumber = req.body.phoneNumber;
   const totp= generateToken(phoneNumber + "Signup");
   //send otp on number
   res.json({
    id:"1"
   })

})
router.post("/signup/verify",(req,res)=>{
     const phoneNumber = req.body.phoneNumber;
   const totp= generateToken(phoneNumber + "Signup");
  if(verifyToken(phoneNumber + "Signup" ,req.body.otp)){
    res.json({
        message:"Invalid Token"
    })
    return;
  }
  //setuser to verifed in db
  res.json({
    
  })

    
})
export default router;