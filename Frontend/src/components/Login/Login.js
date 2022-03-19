import React from "react"
import {Row,Col} from "react-bootstrap"
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
const Login=()=>{
  
    return (
        <Row className="landing">
        <Col>
        <LeftSide/>
        </Col>
        <Col>
        <RightSide/>
        </Col>
           
      </Row>

    )
}

export default Login