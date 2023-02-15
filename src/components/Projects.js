import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import p1 from "../assets/img/p1.png";
import p2 from "../assets/img/p2.png";
import p3 from "../assets/img/p3.png";
import p4 from "../assets/img/p4.png";
import p5 from "../assets/img/p5.png";
import p6 from "../assets/img/p6.png";
import p7 from "../assets/img/p7.png";
import p8 from "../assets/img/p8.png";
import p9 from "../assets/img/9.png";
import p10 from "../assets/img/p10.png";
import p11 from "../assets/img/p11.png";
import p12 from "../assets/img/p12.png";
import p13 from "../assets/img/p13.png";
import p14 from "../assets/img/p14.png";
import p15 from "../assets/img/p15.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

const projects = [

{
title: "project",
description: "Design & Development",
imgUrl: p2,
},
{
    title: "project",
description: "Design & Development",
imgUrl: p4,
},

{
    title: "project",
description: "Design & Development",
imgUrl: p7,
},

    {
    title: "project",
    description: "Design & Development",
    imgUrl: p11,
    },
    {
        title: "project",
    description: "Design & Development",
    imgUrl: p8,
    },
  
    {
        title: "project",
        description: "Design & Development",
        imgUrl: p10,
        }        



];
const projects2 = [  {
    title: "project",
description: "Design & Development",
imgUrl: p9,
},
    
    {
        title: "project",
    description: "Design & Development",
    imgUrl: p13,
    },
    {
        title: "project",
    description: "Design & Development",
    imgUrl: p14,
    },
    {
        title: "project",
    description: "Design & Development",
    imgUrl: p15,
    }
,    
    {
        title: "project",
        description: "Design & Development",
        imgUrl: p1,
        },

{
    title: "project",
description: "Design & Development",
imgUrl: p5,
},
];
 const projects3 = [
    {
        title: "project",
        description: "Design & Development",
    imgUrl: p12,
    },{
        title: "project",
        description: "Design & Development",
    imgUrl: p3,
    },{
        title: "project",
    description: "Design & Development",
    imgUrl: p6,
    }
        ];
return (
<section className="project" id="project">
<Container>
<Row>
<Col size={12}>
<TrackVisibility>
{({ isVisible }) =>
<div className={isVisible ? "animate__animated animate__fadeIn": ""}>
<h2>Projects</h2>
<p> a small example of what i have designed</p>
<Tab.Container id="projects-tabs" defaultActiveKey="first">
<Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
<Nav.Item>
<Nav.Link eventKey="first">Tasks</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="second">E-Comercial</Nav.Link>
</Nav.Item>
<Nav.Item>
<Nav.Link eventKey="third">Basic</Nav.Link>
</Nav.Item>
</Nav>
<Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
<Tab.Pane eventKey="first">
<Row>
{
projects.map((project, index) => {
return (
<ProjectCard
key={index}
{...project}
/>
)
})
}
</Row>
</Tab.Pane>
<Tab.Pane eventKey="second"><Row>
{
projects2.map((project, index) => {
return (
<ProjectCard
key={index}
{...project}/>)})}
</Row>
</Tab.Pane>
<Tab.Pane eventKey="third">
<Row>
{
projects3.map((project, index) => {
return (
<ProjectCard
key={index}
{...project}/>)})}
</Row>
</Tab.Pane></Tab.Content>
</Tab.Container></div>}
</TrackVisibility>
</Col></Row></Container>
<img className="background-image-right" src={colorSharp2}></img>
</section>)}