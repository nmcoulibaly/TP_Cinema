import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Menu() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Link to={'/'}><Navbar.Brand href="#home"> <img src="/assets/images/AppFlix.png" style={{ width: '2rem', borderRadius: '20px' }}></img></Navbar.Brand></Link>
                    <Nav className="me-auto">
                        <Link to={'/films'}><Nav.Link href="#home">Films</Nav.Link></Link>
                        <Link to={'/about'}><Nav.Link href="#features">A Propos</Nav.Link></Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            color='white'
                        />
                        <Button variant="secondary">Search</Button>
                    </Form>
                </Container>
            </Navbar>
        </>
    );
}

export default Menu;