import React from "react"
import {Row,Col} from "react-bootstrap"
import LeftSideRegister from "./LeftSideRegister"
import RightSide from "../Login/RightSide"
const Register=()=>{
  
    return (
        <Row className="landing">
        <Col>
        <LeftSideRegister/>
        </Col>
        <Col>
        <RightSide/>
        </Col>
      </Row>

    )
}

export default Register