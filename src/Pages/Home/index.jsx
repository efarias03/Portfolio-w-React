import { useEffect, useState } from "react";

import "./styles.css";

import { Cursor } from "../../Components/Cursor";

import SplitType from 'split-type';

import { gsap } from "gsap";

export function Home() {
    const [loaded, setLoaded] = useState(false);
    const text = new SplitType(".actual-professional-stats");

    useEffect(() => {
        window.addEventListener("load", () => {
            setLoaded(true);
        })
    }, []);




    gsap.to(".char", {
        y: 0,
        stagger: 0.05,
        delay: 0.8,
        duration: .1
    });

    gsap.to(".actual-professional-stats", {
        x: -65,
        delay: 2,
        duration: .1
    });

    gsap.to(".nav-brand", {
        x: 0,
        delay: 2.2,
        duration: .1
    });

    gsap.to(".nav-ul", {
        x: 0,
        stagger: .05,
        delay: 2,
        duration: .2
    });

    gsap.to(".welcome-text", {
        y: -100,
        delay: 2,
        duration: .8
    });

    gsap.to(".main-svg-menu-transition", {
        x: -170,
        delay: 1.6,
        duration: 2.5
    });

    gsap.to(".second-svg-menu-transition", {
        x: 800,
        delay: 2,
        duration: .65
    });






    return (
        <div className="container">

            <header>
                <div className="header-div">
                    <div className="nav-brand">
                        <h1>
                            <a href="">
                                Enz<b>o</b>Farias.
                            </a>
                        </h1>
                    </div>

                    <nav>
                        <div className="nav-flex-container">
                            
                            <ul className="nav-ul">
                                <li className="nav-link">
                                    <a href="">Home</a>
                                </li>
                                <li className="nav-link">
                                    <a href="">About</a>
                                </li>
                                <li className="nav-link">
                                    <a href="">Projects</a>
                                </li>
                                <li className="nav-link">
                                    <a href="">Contact</a>
                                </li>
                            </ul>

                            <div className="nav-menu">
                                <label className="hamburger">
                                    <input type="checkbox" />
                                    <svg viewBox="0 0 32 32">
                                        <path className="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path className="line" d="M7 16 27 16"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>

            <div className="welcome-div">
                <section id="about" className="glitch welcome-text">
                    <div className="welcome-text">
                        <h1 id="my-text">Welcome to my portfolio!</h1>
                    </div>
                </section>
            </div>

            <div className="underline-svg">
                <svg viewBox="0 0 138 50" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.00001C48.8333 1.50001 143 -0.599986 137 3.00001C129.5 7.50001 4.5 0.5 9.5 6C14.5 11.5 115.5 5 117 7.5C118.5 10 32.5 9.5 33 17C33.5 24.5 91 7 95 20.5C99 34 38 19.5 51 34C51.5 34.8333 54.3 36.1 61.5 34.5C68.7 32.9 70.8333 33.8333 71 34.5V40.5V49C69 47.1667 65.5 43.4 67.5 43C70 42.5 70.5 35 73 42C73 42.1667 73.3 42.6 74.5 43C75.7 43.4 73.3333 46.8333 72 48.5" strokeLinejoin="round" pathLength="1" />
                </svg>
            </div>

            <div className="actual-professional-stats">
                <a href="https://www.linkedin.com/in/enzo-farias-b24866219/">Available for work!</a>
            </div>

            <section id="projects">

            </section>

            <footer>

            </footer>
            < Cursor />
        </div>

    )
};
