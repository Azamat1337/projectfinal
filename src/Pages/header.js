import React from 'react';
import photo from './../img/logo.png'

const Header = () => {
    return (
        <header className="header" data-header>
            <div className="container">
                <a href="/" className="logo">
                    <img src={photo} width="50" height="28" alt="photo" />
                </a>

                <nav className="navbar" data-navbar>
                    <ul className="navbar-list">
                        <li className="navbar-item">
                            <a href="/" className="label-lg navbar-link has-after">
                                Home
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/courses" className="label-lg navbar-link has-after">
                                Courses
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/portfolio" className="label-lg navbar-link has-after">
                                Portfolio
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/contact" className="label-lg navbar-link has-after">
                                Contact
                            </a>
                        </li>
                        <li className="navbar-item">
                            <a href="/data" className="label-lg navbar-link has-after">
                                Data
                            </a>
                        </li>
                    </ul>
                </nav>

                <a href="/registration" className="btn btn-primary">
                    Sign Up
                </a>
                <a href="/login" className="btn btn-primary">
                    Sign In
                </a>

                <button className="nav-open-btn nav-toggle-btn" aria-label="menu" data-nav-toggler>
                    <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
                </button>
            </div>
        </header>
    );
};

export default Header;
