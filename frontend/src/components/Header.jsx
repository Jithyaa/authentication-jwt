import { Navbar,Nav,Container,NavDropdown,Image,Col } from "react-bootstrap";
import {FaSignInAlt,FaSignOutAlt} from 'react-icons/fa';
import { useDispatch,useSelector } from "react-redux";
import{LinkContainer} from 'react-router-bootstrap'
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";
const Header = () =>{

        const {userInfo} = useSelector((state) => state.auth)
       

        const dispatch=useDispatch();
        const navigate= useNavigate();

        const [logoutApiCall] = useLogoutMutation();

        const logoutHandler = async () =>{
                try {
                    await logoutApiCall().unwrap();
                    dispatch(logout());
                    navigate('/')
                } catch (err) {
                    console.log(err);
                }
        }

    return(
        <header>
            <Navbar className="bg-dark"  variant="dark" expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                    <Navbar.Brand className="bg-dark" href="/">React</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            { userInfo ? (
                                <>
                                <Col xs={6} md={4}>
                                    {/* <Image style={{width:"50px",marginRight:"20px"}} src={`http://localhost:5000/Images/${userInfo.image}`} roundedCircle /> */}
                                 </Col>
                                <NavDropdown title={userInfo.name} id='username'>
                                    <NavDropdown.Item onClick={ logoutHandler }>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                                </>
                            ) : (
                                <>
                                <LinkContainer to='/login'>
                            <Nav.Link >
                                <FaSignInAlt/>Sign In
                            </Nav.Link>
                            </LinkContainer>
                            
                            <LinkContainer to='/register'>
                            <Nav.Link >
                                <FaSignOutAlt/>Sign Up
                            </Nav.Link>
                            </LinkContainer>
                                </>
                            ) }
                            
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </header>
    );
};

export default Header;