import momo from "../assets/imgs/just momo.png"
import momoBG from "../assets/imgs/just effects.png"
import { Container, Row, Col } from "react-bootstrap";

export const About = () => 
{
    return (
        <section className="about">
            <Container>
                <Row className="align-items-center"> 
                    <Col xs={12} md={6} xl = {7}>
                        <br></br>
                        <h3 align="left">
                            I'm a graduate from Boston College, currently pursuing a Master's Degree in Computer Science at the University of Melbourne.
                            <br></br>
                            <br></br>
                            In my own time, I love to make colourful creations, in both art and musical forms.
                        </h3>
                    </Col>
                    <Col className="img-momo-container" xs={12} md={6} xl = {5}>
                        <div>
                            <img src={momo} className="img-momo" alt="me_momo"></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}