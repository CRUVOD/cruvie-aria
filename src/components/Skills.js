import { Container, Col, Row } from 'react-bootstrap';
import { useState } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import pythonLogo from "../assets/imgs/python-logo-only.png";
import javaLogo from "../assets/imgs/Java_(1).png";
import reactLogo from "../assets/imgs/React-icon.png";
import flutterLogo from "../assets/imgs/Flutter_logo.svg.png";
import unityLogo from "../assets/imgs/Unity Logo.png";
import springLogo from "../assets/imgs/spring-3.svg";
import cLogo from "../assets/imgs/C_Logo.png";
import typescriptLogo from "../assets/imgs/Typescript_logo_2020.svg.png";

export const Skills = () =>{
    let descriptions = [
        "",
        "My comfort programming language, perfect for writing something functional and short",
        "My main programming language, great for handling servers, creating APIs, and doing object-oriented stuff",
        "I am confident in my ability to create websites and frontends through react, making things look pretty has never been easier",
        "Flutter is quite similar to react, and creating mobile apps using this SDK makes the process a lot simpler",
        "I love the game making process in Unity, making fun and interactive experiences has ever been my life-long aspiration",
        "A reliable backend framework for any and all my frontened processes",
        "While programming in base C is rarely used, the efficient and optimal techniques in programming learnt are still relevant",
        "The powerful typing system allows for great presentation and functionality"
    ];

    const [displayedSkillDescription, setDisplayedSkillDescription] = useState("");

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };

    const updateSkillDescription = (id) =>
    {
        id = id % descriptions.length;
        setDisplayedSkillDescription(descriptions[id]);
    };

    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skills-bx'>
                            <h2>
                                What I use
                            </h2>
                            <br></br>
                            <Carousel responsive={responsive} infinite={true} className='skill-slider' partialVisible={true}>
                                <div className='skill-item'>
                                    <img src={pythonLogo} alt='skillImage' onClick={() => updateSkillDescription(1)}></img>
                                    <h5>Python</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={javaLogo} alt='skillImage' onClick={() => updateSkillDescription(2)}></img>
                                    <h5>Java</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={reactLogo} alt='skillImage' onClick={() => updateSkillDescription(3)}></img>
                                    <h5>React</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={flutterLogo} alt='skillImage' onClick={() => updateSkillDescription(4)}></img>
                                    <h5>Flutter/Dart</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={unityLogo} alt='skillImage' onClick={() => updateSkillDescription(5)}></img>
                                    <h5>Unity/C#</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={springLogo} alt='skillImage' onClick={() => updateSkillDescription(6)}></img>
                                    <h5>Spring</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={cLogo} alt='skillImage' onClick={() => updateSkillDescription(7)}></img>
                                    <h5>C/C++</h5>
                                </div>
                                <div className='skill-item'>
                                    <img src={typescriptLogo} alt='skillImage' onClick={() => updateSkillDescription(8)}></img>
                                    <h5>Typescript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
                <br></br>
                <div>{displayedSkillDescription}</div>
            </Container>
        </section>
    );
}