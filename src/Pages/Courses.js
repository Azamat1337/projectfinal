import { DiJava, DiPython, DiWebplatform, IconName } from "react-icons/di";
import { SiThealgorithms } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaRobot } from "react-icons/fa";


function Courses(){
    return(
<main>
        <article>


            <section class="section service has-bg-image" aria-labelledby="service-label" 
            style={{backgroundImage:' url(./assets/images/service-bg.png)'}}>
                <div class="container">

                    <h2 class="section-title headline-md text-center" id="service-label">The courses that I took</h2>

                    <ul class="service-list">

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(177, 39%, 72%)'}}>
                                
                                <div class="card-media">
                                    <SiThealgorithms />

                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Algorithms</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(41, 99%, 64%)'}}>
                                
                                <div class="card-media">
                                    <DiPython />
                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Introduction to Python</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(19, 97%, 85%)'}}>
                                
                                <div class="card-media">
                                    <FaRobot />

                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Introduction to Robototechnics</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(221, 100%, 79%)'}}>
                                
                                <div class="card-media">
                                    <SiCplusplus />

                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Introduction to C/C++</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(76, 39%, 72%)'}}>
                                
                                <div class="card-media">
                                    <DiWebplatform />
                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Web Development</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </div>

                            </div>
                        </li>

                        <li class="card-container">
                            <div class="card card-md" style={{backgroundColor:' hsl(245, 100%, 90%)'}}>
                                
                                <div class="card-media">
                                    <DiJava />
                                </div>

                                <div>
                                    <h3 class="card-title title-sm">Java Development</h3>

                                    <p class="body-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
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

export default Courses;