import "./styles.css";

export function Home() {
    return (
        <div className="container">
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
