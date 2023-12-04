import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

export const Navigation = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/main">Главная</Nav.Link>
                        <Nav.Link href="/test">Зачёт</Nav.Link>
                        <Nav.Link href="/info">Информация</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Поиск"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Поиск</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
