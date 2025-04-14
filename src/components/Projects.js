import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ecom-1.png";
import projImg2 from "../assets/img/ecom-2.png";
import projImg3 from "../assets/img/ecom-3.png";
import projImg4 from "../assets/img/ecom-4.png";
import projImg5 from "../assets/img/ecom-5.png";
import projImg6 from "../assets/img/ecom-6.png";
import projImg11 from "../assets/img/todo-1.png";
import projImg22 from "../assets/img/todo-2.png";
import projImg33 from "../assets/img/todo-3.png";
import projImg44 from "../assets/img/todo-4.png";
import projImg55 from "../assets/img/todo-5.png";
import projImg66 from "../assets/img/todo-6.png";
import projImg111 from "../assets/img/cc-1.png";
import projImg222 from "../assets/img/cc-2.png";
import projImg333 from "../assets/img/cc-3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from "react";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "E-Commerce Website",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  const otherProjects = [
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg11,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg22,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg33,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg44,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg55,
    },
    {
      title: "Todo App",
      description: "React + LocalStorage",
      imgUrl: projImg66,
    },
  ];

  const extraProjects = [
    {
      title: "Currency-Converter",
      description: "Currency Swap",
      imgUrl: projImg111,
    },
    {
      title: "Currency-Converter",
      description: "Currency Swap",
      imgUrl: projImg222,
    },
    {
      title: "Currency-Converter",
      description: "Currency Swap",
      imgUrl: projImg333,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>

                  <p>
                    {activeTab === "first" && "A responsive shopping website that allows users to browse, search, and purchase products. Features include : Product listing using live API data, Add to Cart functionality with animated UI, Protected Routes, Login & Register with localStorage and Used Technologies in this project React.js, JavaScript, CSS"}
                    {activeTab === "second" && "A web-based task management application that allows users to add, delete, and mark tasks as completed. Features include : Interactive UI with real-time updates ,Task prioritization feature ,Responsive design and Used Technologies in this project React.js, JavaScript, CSS"}
                    {activeTab === "third" && "A simple currency conversion tool that fetches real-time exchange rates. Features include :  Fetches live currency exchange rates using API ,User-friendly dropdown selection for different currencies , Displays converted currency dynamically, and Used Technologies in this project JavaScript, HTML, CSS, Fetch API"}
                  </p>

                  <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {otherProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {extraProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
