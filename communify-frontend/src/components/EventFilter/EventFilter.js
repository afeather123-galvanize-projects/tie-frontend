import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class EventFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'upcoming'
    };
  }

  componentDidMount() {
      this.setState({selected: this.props.selected})
  }

  changeSelection = (selected) => {
      this.setState({selected})
      if(this.props.changeSelection) {
        this.props.changeSelection(selected)
      }
  }

  render() {
    return (
      <div className="mb-2">
        <Nav pills>
          <NavItem>
            <NavLink href="#" 
            active={this.state.selected === 'upcoming' ? true : false}
            onClick={()=>this.changeSelection('upcoming')}>Upcoming</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" 
            active={this.state.selected === 'confirmed' ? true : false}
            onClick={()=>this.changeSelection('confirmed')}>Confirmed</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" 
            active={this.state.selected === 'unconfirmed' ? true : false}
            onClick={()=>this.changeSelection('unconfirmed')}>Unconfirmed</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}