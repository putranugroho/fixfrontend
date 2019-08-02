import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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

    
    experience = () => {
        const experienceList = [
            'Flights',
            'Hotel',
            'Event',
            'Eats'
        ]

        return experienceList.map( item => {
            return (
                <DropdownItem>
                    {item}
                </DropdownItem>
            )
        })
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
    loginComponent = () => {
        return (
            <form>

                            <div className="form-group">
                                <label for="loginEmail">
                                Email Address
                                </label>
                                <input type="email" 
                                className="form-control"
                                id="loginEmail" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"/>
                            </div>

                            <div className="form-group">
                                <label 
                                for="loginPassword">
                                Password
                                </label>
                                
                                <div className="input-group mb-3">
                            
                                <div className="input-group-append">
                                <input type={this.state.showPassword ? 'text' : 'password'} className="form-control" placeholder="Password" id="loginPassword"  aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                
                                <div class="input-group-append">
                                <button class="btn btn-outline-secondary" onClick={this.handleShowPassword} type="button"><i class={this.state.showPassword ? "fas fa-eye" : "fas fa-eye-slash"}></i></button>
                              </div>
                            </div>
                            </div>
                            </div>

                        </form>
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
            <div >
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

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Experience
                            </DropdownToggle>
                            
                            <DropdownMenu center>
                                {this.experience()}
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
                                        {this.loginComponent()}
                                    </ModalBody>
                                    <ModalFooter>
                                    Do not have an account? 
                        <Link to="/register" onClick={this.toggleLogin.bind(this)}> Sign up</Link>
                                        <Button color="success" onClick={this.toggleLogin.bind(this)}>Login</Button>
                                    </ModalFooter>
                                </Modal>
                                <Link to="/register">
                            <button type="button" className="ml-3 btn btn-success" >Register</button>
                            </Link>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navigation