import React, { Component } from "react";
import style from "./component.module.css";
import {
  // UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import { Link } from "react-router-dom";
import { logoutAction } from "../redux/actions";
import { connect } from "react-redux";
import { BsFillPersonFill, BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillShopping } from "react-icons/ai";
// npm install react-icons

class Header extends Component {
  state = {
    dropdownOpen: false,
  };

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };
  render() {
    const styleLink = {
      color: "inherit",
      textDecoration: "none",
    };

    const { username, logoutAction } = this.props;

    return (
      <div className={style.container}>
        {username ? (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color="none" style={styleLink} caret>
              <BsFillPersonLinesFill size={40} />
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/account" style={styleLink}>
                <DropdownItem>Account</DropdownItem>
              </Link>
              <Link to="/history" style={styleLink}>
                <DropdownItem>History Trans</DropdownItem>
              </Link>
              <Link to="/" style={styleLink}>
                <DropdownItem onClick={logoutAction}>Logout</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle color="none" style={styleLink} caret>
              {/* Dropdown Account */}
              <BsFillPersonFill size={40} />
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/login" style={styleLink}>
                <DropdownItem>Login</DropdownItem>
              </Link>
              <Link to="/register" style={styleLink}>
                <DropdownItem>Register</DropdownItem>
              </Link>
            </DropdownMenu>
          </Dropdown>
        )}
        <div>
            <a href="/" style={styleLink}>
              <h1 className={style.title}>Wanderlust</h1>
            </a>
        </div>
        <Link to="/cart" style={styleLink}>
          <div>
            <AiFillShopping size={40} />
          </div>
          {/* <div>Icon Shop Cart</div> */}
        </Link>
      </div>
    );
  }
}

const mapStatetoProps = ({ user: { username } }) => {
  return {
    username,
  };
};

export default connect(mapStatetoProps, { logoutAction })(Header);
// import React, { useState } from "react";
// import { useHistory } from "react-router";
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   NavbarText,
// } from "reactstrap";

// const Header = (props) => {
//   const history = useHistory();
//   const toRegister = () => history.push("/register");
//   const [isOpen, setIsOpen] = useState(false);

//   const toggle = () => setIsOpen(!isOpen);
//   return (
//     <div>
//       <Navbar color="light" light expand="md">
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className="mr-auto" navbar>
//             <NavItem>
//               <NavLink href="/components/">Components</NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href="https://github.com/reactstrap/reactstrap">
//                 GitHub
//               </NavLink>
//             </NavItem>
//             <UncontrolledDropdown nav inNavbar>
//               <DropdownToggle nav caret>
//                 Options
//               </DropdownToggle>
//               <DropdownMenu right>
//                 <DropdownItem>Login</DropdownItem>
//                 <DropdownItem onClick={toRegister}>Register</DropdownItem>
//                 <DropdownItem divider />
//                 <DropdownItem>Reset</DropdownItem>
//               </DropdownMenu>
//             </UncontrolledDropdown>
//             <NavbarBrand href="/">WANDERLUST</NavbarBrand>
//           </Nav>
//           <NavbarText>Simple Text</NavbarText>
//         </Collapse>
//       </Navbar>
//     </div>
//   );
// };

// export default Header;
