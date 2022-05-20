import react from "react";
import {
    Row,
    Col,
    Card,
    ListGroup,
} from "react-bootstrap";


// This is the categories widget
// It lists post categories that a user 
// may follow. e.g Web design, Machine learning, etc.
export default function CategoryWidget() {
    return (
        <>
            <Card className="mt-4">
                <Card.Header>Categories</Card.Header>
                <Row>
                    <Col sm={6}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <a href="#">Web Design</a>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <a href="#">Data Analytics</a>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <a href="#">Machine Learning</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col sm={6}>
                        <ListGroup as="ul">
                            <ListGroup.Item as="li">
                                <a href="#">Artificial Intelligence</a>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <a href="#">Cyber Security</a>
                            </ListGroup.Item>

                            <ListGroup.Item as="li">
                                <a href="#">Mathematics</a>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
            </Card>
        </>
    )
}