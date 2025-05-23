import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg01 from "../assets/img/wan-1.png";
import projImg02 from "../assets/img/wan-2.png";
import projImg03 from "../assets/img/wan-3.png";
import projImg04 from "../assets/img/wan-4.png";
import projImg05 from "../assets/img/wan-5.png";
import projImg06 from "../assets/img/wan-6.png";
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
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useState } from "react";

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("first");

  const projects = [
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg01,
    },
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg02,
    },
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg03,
    },
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg04,
    },
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg05,
    },
    {
      title: "Wanderlust",
      description: "Rental Listing Platform",
      imgUrl: projImg06,
    },
  ];

  const otherProjects = [
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

  const extraProjects = [
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
                    {activeTab === "first" && "A full-stack rental listing web application where users can explore, list, and book vacation rentals. Built with the MERN-style stack using Node.js, Express, MongoDB, and EJS. Features include CRUD operations, image uploads with Cloudinary, user authentication with Passport.js, and interactive maps via Mapbox. Designed a fully responsive UI with Bootstrap and followed MVC architecture with RESTful routing. Deployed on Render with MongoDB Atlas."}
                    {activeTab === "second" && "A responsive shopping website that allows users to browse, search, and purchase products. Features include : Product listing using live API data, Add to Cart functionality with animated UI, Protected Routes, Login & Register with localStorage and Used Technologies in this project React.js, JavaScript, CSS"}
                    {activeTab === "third" && "A web-based task management application that allows users to add, delete, and mark tasks as completed. Features include : Interactive UI with real-time updates ,Task prioritization feature ,Responsive design and Used Technologies in this project React.js, JavaScript, CSS"}
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
