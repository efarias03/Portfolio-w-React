import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";

import { Loader } from "../../Components/Rive/RiveLoader";

import "./styles.css";


export function Home() {
    const [loaded, setLoaded] = useState(false);
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll(".circle");
    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");
    const links = document.querySelectorAll("a");


    useEffect(() => {
        window.addEventListener("load", () => {
            setLoaded(true);
        })
    }, [])


    /* Move Cursor */
    circles.forEach(function (circle) {
        circle.x = 0;
        circle.y = 0;
    });

    window.addEventListener("mousemove", function (e) {
        coords.x = e.clientX;
        coords.y = e.clientY;
    });

    function moveCursor() {
        let x = coords.x;
        let y = coords.y;


        circles.forEach(function (circle, index) {
            circle.style.left = x + "px";
            circle.style.top = y + "px";
            circle.x = x;
            circle.y = y;

            const nextCircle = circles[index + 1] || circles[0];
            x += (nextCircle.x - x) * 0.8;
            y += (nextCircle.y - y) * 0.8;
        });

        requestAnimationFrame(moveCursor);
    }

    moveCursor();

    /* Cursor Click Animation */

    document.addEventListener("click", mouseClickAnimation);

    function mouseClickAnimation(e) {
        innerCursor.classList.remove("decrease");
        outerCursor.classList.remove("outer-decrease");
        document.addEventListener("mousedown", () => {
            innerCursor.classList.add("decrease");
            outerCursor.classList.add("outer-decrease");
        });
        document.addEventListener("mouseup", () => {
            innerCursor.classList.remove("decrease");
            outerCursor.classList.remove("outer-decrease");
        });
    }


    /* Hover Animation */

    links.forEach(link => {
        growCursor(link);
    })


    function growCursor(x) {
        x.addEventListener("mouseover", () => {
            innerCursor.classList.add("grow")
        })
        x.addEventListener("mouseleave", () => {
            innerCursor.classList.remove("grow")
        })
    }




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
                                Enzo Farias.
                            </a>
                        </h1>
                    </div>

                    <nav>
                        <div className="nav-flex-container">
                            <ul>
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
                                <label class="hamburger">
                                    <input type="checkbox" />
                                    <svg viewBox="0 0 32 32">
                                        <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                                        <path class="line" d="M7 16 27 16"></path>
                                    </svg>
                                </label>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>


            <main>
                <article>
                    <section id="about">

                    </section>

                    <section id="projects">

                    </section>
                </article>

                <aside>
                    <div id="github-aside-link"></div>
                    <div id="linkedin-aside-link"></div>
                    <div id="dribbble-aside-link"></div>
                    <div id="behance-aside-link"></div>
                </aside>
            </main>

            <footer>

            </footer>
            <div className="circle inner-cursor"></div>
            <div className="circle outer-cursor"></div>

        </div>

    )
};
