import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button, 
  Modal, 
  ModalHeader, 
  ModalBody, 
  ModalFooter
} from 'reactstrap';



class Navigation extends Component {
    state={
        isOpen: false,
        modal: false,

        
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
      }
      
      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
      }

      handleScroll() {
        const { scrollPos } = this.state;
        this.setState({
          scrollPos: document.body.getBoundingClientRect().top,
          show: document.body.getBoundingClientRect().top > scrollPos
        });
      }

    category = () => {
      const categoryList = [
'phone','computer','household','furniture',
'clothing', 'food and beverages','camera','automotive',
'plane','hotel']

   return categoryList.map( item => {
            return(
          
          <DropdownItem>
                    {item}
                  </DropdownItem>
            )
            

        }
   )
        
  }
  

  toggleLogin() {
    this.setState(prevState => ({
        modal: !prevState.modal
      }));
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="hidden">
        <Navbar color="transparent" light expand="md">
            <NavbarBrand href="/">AnjayPediaLoka</NavbarBrand>
          <NavbarToggler onClick={this.toggle.bind(this)} />

          <Collapse isOpen={this.state.isOpen} navbar>

          <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Category
                </DropdownToggle>
                <DropdownMenu center>
                {this.category()}
                </DropdownMenu>
              </UncontrolledDropdown>
        
          <div className="input-group justify-content-center">
          <form class="form-inline my-2 my-lg-0">
              <input type="text" class="form-control" placeholder="Search Products" aria-label="Recipient's username" aria-describedby="button-addon2">
              </input>
              </form>
              <div className="input-group-append">
                  <button className="btn" type="button" id="button-addon2">
                      <i className="fas fa-search"></i>
                  </button>
              </div>
          </div>
          
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
              

              <Button color="danger" onClick={this.toggleLogin.bind(this)}>Login</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggleLogin.bind(this)} className={this.props.className}>
                <ModalHeader toggle={this.toggleLogin.bind(this)}>Login</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={this.toggleLogin.bind(this)}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggleLogin.bind(this)}>Cancel</Button>
                </ModalFooter>
              </Modal>

              <button type="button" className="ml-3 btn btn-success">Register</button>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navigation