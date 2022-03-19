import React from "react"
import {Image} from "react-bootstrap"
import pub from "../../images/background.jpg"
const RightSide=()=>{
    return (
        <div>
            <Image src={pub} thumbnail style={{border:"none"}} /> 
        </div>
    )
}

export default RightSide