import './css/pages/portfolio.css';
import './css/require.css';
import { DiJava, DiPython, DiWebplatform, IconName } from "react-icons/di";
import { SiThealgorithms } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaPython, FaRobot } from "react-icons/fa";
function Portfolio(){
    return(

        <main>
        <article>
            <section class="section portfolio" aria-labelledby="portfolio-label">
                <div class="container">

                    <h2 class="section-title headline-md text-center" id="portfolio-label">My Achievments</h2>

                    <ul class="portfolio-list">

                        <li>
                            <div class="portfolio-card">

                                
                                <div class="card-banner img-holder" style={{ '--width': 800, '--height': 540 }}>
                                    <FaPython size={300}/>

                                    <a href="#" class="btn-icon" aria-label="More about python">
                                    
                                        <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>

                                <div class="card-content">

                                    <span class="chip label-md">Programming Languages</span>

                                    <h3 class="title-md">Programming for everybody, University of Michigan</h3>

                                    <p class="card-text">The course consists of three parts, during the course I learned the basics of the language, as well as parsing.
                                    </p>

                                    <a href="https://online.umich.edu/series/python-for-everybody/" class="btn btn-primary" target='_blank'>Link To che Course</a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="portfolio-card">

                                <div class="card-banner img-holder" style={{ '--width': 800, '--height': 540 }}>
                                    <img src="./assets/images/portfolio-2.jpg" width="800" height="540" loading="lazy" 
                                    alt="cert rob" class="img-cover"/>

                                    <a href="#" class="btn-icon" aria-label="More about robotics">
                                    
                                        <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>

                                <div class="card-content">

                                    <span class="chip label-md">Robototechnics</span>

                                    <h3 class="title-md">Modern Robotics, Northwestern University</h3>

                                    <p class="card-text">
                                    </p>

                                    <a href="https://modernrobotics.northwestern.edu/nu-gm-book-resource/foundations-of-robot-motion/" class="btn btn-primary">Link to the Course</a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="portfolio-card">

                                <div class="card-banner img-holder" style={{ '--width': 800, '--height': 540 }}>
                                    <img src="./assets/images/portfolio-3.jpg" width="800" height="540" loading="lazy" 
                                    alt="alg cert" class="img-cover"/>

                                    <a href="#" class="btn-icon" aria-label="more about algo">
                                    
                                        <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>

                                <div class="card-content">

                                    <span class="chip label-md">Algorithms</span>

                                    <h3 class="title-md">Algorithms, Princeton University</h3>

                                    <p class="card-text">
                                    </p>

                                    <a href="https://www.coursera.org/learn/algorithms-part1" class="btn btn-primary" target='_blank'>Link to the Course</a>

                                </div>

                            </div>
                        </li>

                        <li>
                            <div class="portfolio-card">

                                <div class="card-banner img-holder" style={{ '--width': 800, '--height': 540 }}>
                                    <img src="./assets/images/portfolio-4.jpg" width="800" height="540" loading="lazy" 
                                    alt="cert step" class="img-cover"/>

                                    <a href="#" class="btn-icon" aria-label="More about cert">
                                    
                                        <ion-icon name="arrow-forward-sharp" aria-hidden="true"></ion-icon>
                                    </a>
                                </div>

                                <div class="card-content">

                                    <span class="chip label-md">Programming Languages</span>

                                    <h3 class="title-md">Python Generation</h3>

                                    <p class="card-text">
                                    </p>

                                    <a href="https://stepik.org/course/58852/" class="btn btn-primary" target='_blank'>Link to the Course</a>

                                </div>

                            </div>
                        </li>
                    </ul>

                </div>
            </section>
    
        </article>
    </main>
    )
}

export default Portfolio;