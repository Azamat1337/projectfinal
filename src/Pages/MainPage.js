import React from 'react';
import './css/main.css';
import './css/require.css';
import { FaCss3Alt, FaHtml5, FaPython, FaReact } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { DiJavascript1 } from 'react-icons/di';
import { Fa1, Fa2, Fa3, Fa4, IconName } from "react-icons/fa6";


const MainPage = () => {
    return (
        <div>
            {/* <div class="preloader" data-preloader>
                <div class="preloader-circle"></div>
            </div> */}





            <main>
                <article>

                    <section class="section hero" aria-label="home">
                        <div class="container">

                            <div class="hero-content">

                                <p class="hero-subtitle">HI, MY NAME IS Kazmukhanov Azamat</p>

                                <h1 class="headline-lg">I'm a third year student at IITU</h1>

                                <p class="hero-text body-md">
                                    Almaty, Aktobe, Kazakhstan
                                </p>

                                <a href="#" class="btn btn-primary">Let's Start</a>

                            </div>

                            <figure class="hero-banner">
                                <img src="./assets/images/hero-banner.png" width="680" height="645" alt="moe photo"
                                    class="w-100" />
                            </figure>
                        </div>
                    </section>


                    <section class="section about" aria-label="about me">
                        <div class="container">

                            <figure class="about-banner">
                                <img src="./assets/images/about-banner.png" width="580" height="554" loading="lazy"
                                    alt="moe photo" class="w-100" />
                            </figure>

                            <div class="about-content">

                                <h2 class="title-lg">About me
                                </h2>

                                <p class="body-md section-text">
                                    I am a third-year student, during all my studies I have mastered such programming languages as: C/C++, Java, Python, JavaScript.
                                    And I also learned and used a lot of technology.
                                </p>

                                <ul class="about-list">

                                    <li>
                                        <p class="list-text">
                                            <strong class="strong title-md">31032</strong>Student ID
                                        </p>
                                    </li>

                                    <li>
                                        <p class="list-text">
                                            <strong class="strong title-md">3.02</strong>GPA
                                        </p>
                                    </li>

                                </ul>

                                <div class="wrapper">
                                    <a href="/contact" class="btn btn-primary" target="_blank">Contact Me</a>

                                    <a href="/portfolio" class="btn btn-secondary" target="_blank">Portfolio</a>
                                </div>

                            </div>

                        </div>
                    </section>

                    <section class="section skill" aria-labelledby="skill-label">
                        <div class="container">

                            <div class="skill-content">

                                <h2 class="section-title headline-md" id="skill-label">My Skills</h2>

                                <ul class="skill-list">

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(44, 98%, 49%)' }}>

                                            <div class="card-media">
                                                <FaHtml5 />
                                            </div>

                                            <h2 class="card-title">HTML</h2>

                                        </div>
                                    </li>

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(221, 100%, 59%)' }}>

                                            <div class="card-media">
                                                <FaCss3Alt />
                                            </div>

                                            <h2 class="card-title">CSS</h2>

                                        </div>
                                    </li>

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(57, 89%, 50%)' }}>

                                            <div class="card-media">
                                                <DiJavascript1/>
                                            </div>

                                            <h2 class="card-title">JavaScript</h2>

                                        </div>
                                    </li>

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(221, 100%, 79%)' }}>

                                            <div class="card-media">
                                                <FaReact />
                                            </div>

                                            <h2 class="card-title">React</h2>

                                        </div>
                                    </li>

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(132, 95%, 53%)' }}>

                                            <div class="card-media">
                                                <FaPython />
                                            </div>

                                            <h2 class="card-title">Python</h2>

                                        </div>
                                    </li>

                                    <li>
                                        <div class="card card-sm" style={{ backgroundColor: 'hsl(245, 100%, 90%)' }}>

                                            <div class="card-media">
                                                <SiCplusplus />
                                            </div>

                                            <h2 class="card-title">C++</h2>

                                        </div>
                                    </li>

                                </ul>

                            </div>

                        </div>
                    </section>


                    <section class="section testi" aria-labelledby="testi-label">
                        <div class="container">

                            <h2 class="headline-md section-title text-center" id="testi-label">My principles</h2>

                            <ul class="slider">

                                <li class="slider-item card-container">
                                    <div class="card card-lg">

                                        <figure class="card-media">
                                            <Fa1 />
                                        </figure>

                                        <div class="card-content">

                                            <blockquote class="body-sm">
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita rerum corrupti ratione reiciendis itaque quas, rem minus ipsa sunt eos. Neque animi nesciunt dolore eligendi reiciendis quaerat reprehenderit voluptates sed.

                                            </blockquote>


                                        </div>

                                    </div>
                                </li>

                                <li class="slider-item card-container">
                                    <div class="card card-lg">

                                        <figure class="card-media">
                                            <Fa2 />
                                        </figure>

                                        <div class="card-content">

                                            <blockquote class="body-sm">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eum eaque, quidem repellendus quo voluptatem. Necessitatibus vero commodi delectus, asperiores perferendis optio molestias illum ut, quisquam dolore assumenda expedita. Eius?
                                            </blockquote>

                                        </div>

                                    </div>
                                </li>

                                <li class="slider-item card-container">
                                    <div class="card card-lg">

                                        <figure class="card-media">
                                            <Fa3 />
                                        </figure>

                                        <div class="card-content">

                                            <blockquote class="body-sm">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, quidem impedit. Facilis praesentium placeat culpa corporis. Atque tempora cupiditate sunt cum magni, vero porro, eaque at qui nobis dignissimos temporibus.
                                            </blockquote>

                                        </div>

                                    </div>
                                </li>

                                <li class="slider-item card-container">
                                    <div class="card card-lg">

                                        <figure class="card-media">
                                            <Fa4 />
                                        </figure>

                                        <div class="card-content">

                                            <blockquote class="body-sm">
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, tempore? Dolor quam, ea nihil eligendi quis expedita animi nobis quas debitis perferendis adipisci voluptates at aut exercitationem atque fugit impedit.
                                            </blockquote>
                                        </div>

                                    </div>
                                </li>

                            </ul>

                        </div>
                    </section>

                </article>
            </main>

            {/* 
            <footer class="footer">
                <div class="container">

                    <ul class="social-list">

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-twitter"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-instagram"></ion-icon>
                            </a>
                        </li>

                        <li>
                            <a href="#" class="social-link">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>

                    </ul>

                    <p class="text-center">2023, Almaty, RoK</p>

                </div>
            </footer> */}

        </div>
    );
};

export default MainPage;
