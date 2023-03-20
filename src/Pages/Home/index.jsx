import { Canvas } from "@react-three/fiber";
import { EffectComposer, BrightnessContrast, DepthOfField, Bloom, Noise, Vignette, Pixelation } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing'
import { useEffect, useState } from "react";
import { Blob } from "../../components/Blob";

import "./styles.css";


export function Home() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        window.addEventListener("load", () => {
            setLoaded(true);
        })
    }, [])
    

    return (
        <div className="container">

            <div className={`preloader ${loaded ? "loaded" : ""}`}>
                <div className="loader-tile">
                </div>
                <div className="loader-tile">
                </div>
            </div>

            <Canvas>
                <Blob />

                <EffectComposer>
                    <Noise opacity={0.02} />
                    
                </EffectComposer>
            </Canvas>


            <header>
                <div className="header-div">
                    <div className="nav-brand">
                        <h1>Enzo Farias.</h1>
                    </div>

                    <nav>
                        <ul>
                            <li className="nav-link">Home</li>
                            <li className="nav-link">About</li>
                            <li className="nav-link">Projects</li>
                            <li className="nav-link">Contact</li>
                        </ul>

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

        </div>

    )
};
