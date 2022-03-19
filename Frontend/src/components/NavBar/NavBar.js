import React from "react" ;
import "./NavBar.css" ;
import "bootstrap/dist/css/bootstrap.css" ;
import {Nav, Navbar, NavDropdown} from "react-bootstrap" ;
import logo from "../../images/logo.jpg"
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import {Link} from "react-router-dom"
 
const NavBar=()=>{
    return (
        <div>
            <Navbar className="NavBar" bg='dark' variant="dark" sticky="top" expand="lg" collapseOnSelect>
                <Navbar.Brand >
                    <img  className="logo" src={logo} alt="sncft" height="50px" width="60%"/> {''}
                    
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                <Nav>
                   <NavDropdown title="Reservation">
                   <NavDropdown.Item href="/">
                         Aller 
                     </NavDropdown.Item>
                     <NavDropdown.Divider/>
                     <NavDropdown.Item href="/alleretretour">
                         Aller Et Retour
                     </NavDropdown.Item>
                     <NavDropdown.Divider/>
                     <NavDropdown.Item href="/multidestination">
                         Multi-Destination
                     </NavDropdown.Item>
                   </NavDropdown>

                <Nav.Link href="/actualite">Actualité </Nav.Link>
                <Nav.Link href="/sncft">SNCFT</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/login">Sign In</Nav.Link>
               </Nav>
               
                </Navbar.Collapse>
                <button className="dark-navbar"> Dark</button>

              
            </Navbar>
    
            
          
        </div>
    )
}

export default NavBar