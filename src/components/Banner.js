import { Col, Container, Row } from "react-bootstrap";

import headerImg from "../assets/imgs/Just Moon.png"
import { useEffect, useState } from "react";

export const Banner = () =>
{
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const wordsToRotate = ["CRUVIE", "Roger", "a Developer", "an Artist"]
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const cyclePeriod = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {clearInterval(ticker)};
    });

    const tick = () => {
        let i = loopNum % wordsToRotate.length;
        let fullText = wordsToRotate[i];
        let updatedText = isDeleting ?  fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting)
        {
            setDelta(prevDelta => prevDelta/2);
        }

        if (!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(cyclePeriod);
        }
        else if (isDeleting && updatedText === "")
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <div className = "banner-main">
                        <div class='banner-text'>
                            <h1> {"Hi I'm"} <span className="wrap">{text}</span></h1>
                        </div>
                        <br></br>
                        <div className="tagline">
                            Welcome to my portfolio!
                        </div>
                    </div>  
                </Row>
            </Container>
        </section>
    );
}