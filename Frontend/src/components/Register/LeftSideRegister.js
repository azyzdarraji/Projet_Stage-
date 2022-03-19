import React from "react"
import {Form,Button,Image} from "react-bootstrap"
import '../Login/Login.css'

import logo from "../../images/logo.jpg"
const LeftSideRegister=()=>{
    return (
        <div className="leftSide"> 

         <Form  className="form-login"  style={{width:"80%" , marginLeft:"10%",marginTop:"10%"}}>
             <Image src={logo} alt="sncft" className="form-logo-img"/>
             <Form.Group>
                 <Form.Label className="form-login-title" >
                     Enter Your Name
                 </Form.Label>
                 <Form.Control className="form-login-input" type="text" placeholder="Enter Your Name"/>
             </Form.Group>

             <Form.Group>
                 <Form.Label className="form-login-title" > 
                     Enter Your CIN
                 </Form.Label>
                 <Form.Control className="form-login-input" type="text" placeholder="Enter Your CIN"/>
             </Form.Group>

             <Form.Group>
                 <Form.Label className="form-login-title" > 
                     Enter Your Telephone Number
                 </Form.Label>
                 <Form.Control className="form-login-input" type="text" placeholder="Enter Your TelePhone Number"/>
             </Form.Group>

             <Form.Group>
                 <Form.Label className="form-login-title" >
                     Enter Your Email
                 </Form.Label>
                 <Form.Control className="form-login-input" type="email" placeholder="Enter Your Email"/>
             </Form.Group>
             

             <Form.Group>
                 <Form.Label className="form-login-title" > 
                     Enter Your Password
                 </Form.Label>
                 <Form.Control className="form-login-input" type="password" placeholder="Enter Your Password"/>
             </Form.Group>

       

             <Button  type="submit" className="form-login-btn">Enregistrer</Button>
         </Form>
        </div>
    )
}

export default LeftSideRegister