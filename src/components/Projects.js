import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCards";

import clothestMatchImg from "../assets/imgs/projects/clothestmatch.png";
import dictionaryTCPImg from "../assets/imgs/projects/dictionarytcp.png";
import TAApplicationImg from "../assets/imgs/projects/taapplication.png";
import OCRImg from "../assets/imgs/projects/ocr.png";
import GunsmithImg from "../assets/imgs/projects/gunsmith.png";
import ChalkboardImg from "../assets/imgs/projects/chalkboard.png";


export const Projects = () =>
{
    const projects = [
        {
            title: "Clothest-Match",
            description: "Tinder for clothes mobile app, built using Flutter SDK",
            img: clothestMatchImg,
            link: "https://github.com/nugentcaillin/clothest-match",
        },
        {
            title: "DictionaryTCP",
            description: "Simple TCP server written in Java, with multi-threaded socket management",
            img: dictionaryTCPImg,
            link: "https://github.com/CRUVOD/DictionaryTCP",
        },
        {
            title: "TA-Application Website",
            description: "Prototype website for students and staff to connect and assign teaching assistants ",
            img: TAApplicationImg,
            link: "https://github.com/CSCI3356Spring2023/EforEveryone"
        },
        {
            title: "OCR Columned PDF Data Extracton",
            description: "Script to extract text information in reading order for both single-columned or double-columned layout PDF documents",
            img: OCRImg,
            link: ""
        },
        {
            title: "Gunsmith's Tale",
            description: "In development top-down shooter game made in Unity",
            img: GunsmithImg,
            link: "https://github.com/CRUVOD/Gunsmith"
        },
        {
            title: "The Chalkboard",
            description: "2D platformer made in Unity, published on Google Play store",
            img: ChalkboardImg,
            link: "https://github.com/CRUVOD/TheChalkboard"
        }
    ];


    return (
        <section className="project" id="project">
            <Container>
                <h1>Projects</h1>
                <br></br>
                <Row>
                    {
                        projects.map((project, index) => {
                            return(
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                        })
                    }
                </Row>
            </Container>
        </section>
    );
}