import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

export default class GroupFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'all_groups'
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
            active={this.state.selected === 'all_groups' ? true : false}
            onClick={()=>this.changeSelection('all_groups')}>All Groups</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" 
            active={this.state.selected === 'your_groups' ? true : false}
            onClick={()=>this.changeSelection('your_groups')}>Your Groups</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" 
            active={this.state.selected === 'create_group' ? true : false}
            onClick={()=>this.changeSelection('create_group')}>Create Group</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}