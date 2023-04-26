import { useEffect, useState } from "react";

import "./styles.css";

import { Cursor } from "../../Components/Cursor";

import SplitType from 'split-type';
import debounce from 'lodash/debounce'

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
        delay: 2,
        duration: 2
    });

    gsap.to(".second-svg-menu-transition", {
        x: 800,
        delay: 2,
        duration: 1
    });


    return (
        <div className="container">

            <div className={`preloader ${loaded ? "loaded" : ""}`}>
                <div className="loader-tile">
                </div>
                <div className="loader-tile">
                </div>
            </div>


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
                            <div className="main-svg-menu-transition menu-bg">
                                <svg viewBox="0 0 199 245" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M25.5831 30.5C-10.4169 29.3 0.916448 10.3333 11.0831 1H197.583V214C200.416 221.333 194.683 236.8 149.083 240C92.0831 244 49.0831 250.5 39.5831 225.5C30.0831 200.5 147.083 171 82.0831 169C17.0831 167 -9.41689 112.5 32.0831 96C73.5831 79.5 70.5831 32 25.5831 30.5Z" fill="#09F069" stroke="#09F069" strokeLinejoin="round" />
                                </svg>
                            </div>

                            <div className="second-svg-menu-transition menu-bg">
                                <svg xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 35.5C-7.19999 19.9 12.8333 5.66667 25 0.5H84V204C97 212.667 107.5 228.1 45.5 220.5C-16.5 212.9 -0.333328 202 15.5 197.5C38.3333 195.833 74 190 34 180C-6 170 5 155.167 15.5 149C37.5 139.667 71.4 120.4 31 118C-9.4 115.6 0.166675 92.6667 10 81.5C17.1667 72.6667 27.2 51.1 10 35.5Z" fill="#09F069" stroke="#09F069" strokeLinejoin="round" />
                                </svg>
                            </div>
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
