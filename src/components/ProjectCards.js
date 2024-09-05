import { Col} from "react-bootstrap";

export const ProjectCard = ({title, description, img, link}) => 
{
    if (link != "")
    {
        // If there is a link to repo etc.
        return (
            <Col sm = {6} md = {4}>
                <div className="proj-imgbx">
                    <img src={img}/>
                    <a href={link} className="proj-link" target="_blank">
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                    </a>
                </div>
            </Col>
        );        
    }
    else
    {
        return (
            <Col sm = {6} md = {4}>
                <div className="proj-imgbx">
                    <img src={img}/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
        );    
    }

}