/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import gsap from "gsap"
import { useEffect } from "react"

import Header from "./header"
import "./layout.css"

import Hero from "./Hero"
import About from "./About"
import Projects from "./Projects"
import Contact from "./Contact"


const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  let tl = gsap.timeline()

  function scrolldiv(a) {
    var tray = document.getElementById("tray");
    var elem = document.getElementById(a);
    //tray.scrollLeft = elem.offsetLeft;
    tl.to("#content-body", {y: "10%", duration:0.5})
    setTimeout(() => {
        tray.scrollTo({
            body:0,
            left: elem.offsetLeft,
            behavior: 'smooth',
        })
    }, 500);
    tl.to("#content-body", {y: "0%", duration:0.5, delay:0.5})
}

    return (
        <div className="wrapper">
            <svg width="100%" height="100%" className="wrapper-grid">
                <defs>
                    <pattern id="rect" patternUnits="userSpaceOnUse" width="100" height="100">
                        <rect width='100' height='100' fill='#020202' />
                        <g fill='#ffffff09'>
                            <rect width='100' height='1' y='20' />
                            <rect width='100' height='1' y='40' />
                            <rect width='100' height='1' y='60' />
                            <rect width='100' height='1' y='80' />
                            <rect width='1' height='100' x='20' />
                            <rect width='1' height='100' x='40' />
                            <rect width='1' height='100' x='60' />
                            <rect width='1' height='100' x='80' />
                        </g>
                        <rect width='100' height='100' fill='none' stroke-width='1' stroke='#ffffff0e' />
                    </pattern>
                </defs>
                <rect id="canvas" width="100%" height="100%" fill="url(#rect)" />
            </svg>
            <div className="wrapper-content-layer">
                <div className="wrapper-content">
                    <div className="wrapper-content-top" id="content-top">
                        <div className="location" onClick={() => {scrolldiv("hero")}}>abj</div>
                    </div>
                    <div className="wrapper-content-body" id="content-body">
                        <div className="light-layer">
                            <div className="ball1"></div>
                            <div className="ball2"></div>
                        </div>
                        <div className="card-tray" id="tray">
                            <div className="section-wrapper" id="hero">
                                <Hero />
                            </div>
                            <div className="section-wrapper" id="about">
                                <About />
                            </div>
                            <div className="section-wrapper" id="projects">
                                <Projects />
                            </div>
                            <div className="section-wrapper" id="contact">
                                <Contact />
                            </div>
                        </div>
                    </div>
                    <div className="wrapper-nav">
                        <p className="nav-item" onClick={() => {scrolldiv("about")}}>about</p>
                        <p className="nav-item" onClick={() => {scrolldiv("projects")}}>projects</p>
                        <p className="nav-item" onClick={() => {scrolldiv("contact")}}>contact</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Layout
