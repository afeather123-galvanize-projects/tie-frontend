import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
import {Link} from 'react-router-dom'
import InviteNotificationBadge from '../InviteNotificationBadge'
 
export default class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    console.log('MATCH', this.props)
    const welcome = this.props.name ? 
    (<Nav className="ml-auto" navbar>
    <NavItem>
    <NavLink><InviteNotificationBadge/></NavLink>
  </NavItem>
    <NavItem active>
      <NavLink>Welcome, {this.props.name}</NavLink>
    </NavItem>
    <NavItem>
      <NavLink onClick={this.props.logout} style={{cursor: "pointer"}}>Logout</NavLink>
    </NavItem>
    </Nav>) : null

    const loggedIn = this.props.name ? (
      <Nav pills>
            <NavItem>
              <Link to="/events" 
              className={this.props.location.pathname === '/events' ? "nav-link active" : "nav-link"}>Events</Link>
            </NavItem>
            <NavItem>
              <Link 
              className={this.props.location.pathname === '/groups' ? "nav-link active" : "nav-link"} 
              to="/groups">Groups</Link>
            </NavItem>
          </Nav>
    ) : null
    return (
      <div>
        <Navbar color="light" light expand="md" className="mb-2">
          <NavbarBrand href="/">Tie</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {loggedIn}
          <Collapse isOpen={this.state.isOpen} navbar>
            {welcome}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}