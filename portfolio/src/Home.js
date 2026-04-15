import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";

function HomePage() {
    return (
        <div style={{overflowY: "auto"} }>
        

            <div class="w3-top">
                <div class="w3-bar w3-white w3-wide w3-padding w3-card">
                    <a href="#home" class="w3-bar-item w3-button"><b>Flavia Cavalcanti</b> Portfolio</a>
                    <div class="w3-right w3-hide-small">
                        <a href="#projects" class="w3-bar-item w3-button">Projects</a>
                        <a href="#contact" class="w3-bar-item w3-button">Contact</a>
                        <a href="#resume" class="w3-bar-item w3-button">Resume</a>
                    </div>
                </div>
            </div>
                    

            <header class="w3-display-container w3-content w3-wide" id="home">
                <img class="w3-image" src="/Media/YaleHeader.jpg" alt="Yale" ></img>
                <div class="w3-display-middle w3-margin-top w3-center">
                </div>
            </header>

            <div class="w3-content w3-padding" style={{ maxWidth: '1564px' }}>

                <div class="w3-container w3-padding-32" id="projects">
                    <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Projects</h3>
                </div>

                <div class="w3-row-padding">
                    <div class="w3-col l3 m6 w3-margin-bottom" style={{ display: 'flex', justifyContent: 'center' }} >
                        <div class="w3-display-container">
                            <div class="w3-display-topleft w3-black w3-padding">Yale Peabody Museum</div>
                            <a href="ypm.html">
                                <img src="/Media/YPMThumbnail.png" alt="YPM" style={{ height: '250px' }}></img>
                            </a>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div class="w3-display-container">
                            <div class="w3-display-topleft w3-black w3-padding">MoMath Global Golf</div>
                            <img src="/Media/GlobalGolfThumbnail.png" alt="Global Golf" style={{ height: '250px' }}></img>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div class="w3-display-container">
                            <div class="w3-display-topleft w3-black w3-padding">New Museum Aerobes</div>
                            <img src="/Media/AerobeThumbnail.jpeg" alt="Aerobes" style={{ height: '250px' }}></img>
                        </div>
                    </div>
                    <div class="w3-col l3 m6 w3-margin-bottom" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div class="w3-display-container">
                            <div class="w3-display-topleft w3-black w3-padding">Purina</div>
                            <img src="/Media/PurinaThumbnail.png" alt="Purina" style={{ height: '250px' }}></img>
                        </div>
                    </div>
                </div>



            </div>

            <div class="w3-container w3-padding-32" id="about">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">About</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>


            <div className="w3-container w3-padding-32" id="contact">
                <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">Contact</h3>
                <p>
                    Email: flaviaromac@gmail.com
                </p>
            </div>




            <footer className="w3-center w3-black w3-padding-16">
                <p>Let's work together!</p>
            </footer>

        </div>
       
    );
}

  

export default HomePage;
