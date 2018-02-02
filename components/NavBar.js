import React from 'react';
import {Navbar,Nav,NavItem,} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class NavBar extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
           <div>
               <Navbar>
                   <Navbar.Header>
                       <Navbar.Brand>
                           <Link to={'/'} style={{textDecoration:'none'}}>My App</Link>
                       </Navbar.Brand>
                   </Navbar.Header>
                   <Nav>
                       <NavItem eventKey={1} href="#">
                           {!this.props.isloggedin?
                               <Link to={'/login'} style={{textDecoration:'none'}}>Login</Link>:
                               <Link to={'/search'} style={{textDecoration:'none'}}>Search</Link>}
                       </NavItem>
                       <NavItem eventKey={2} href="#">
                           Link
                       </NavItem>
                   </Nav>
               </Navbar>;
           </div>
        )
    }
}

export default NavBar