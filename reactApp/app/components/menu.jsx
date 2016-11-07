import React from 'react';
import './menu.scss';


class Menu extends React.Component {
    render() {
        return (

            <div>
                <header id="header">
                    <section id="menu">
                        <nav id="menu_gral">
                            <ul className="menu">
                                <li><a href="index.html"><i className="icon-home"></i>HOME</a>
                                    <ul className="sub-menu">
                                    </ul>
                                </li>
                                <li><a  href="movies.html"><i className="icon-user"></i>MOVIES</a>
                                    <ul className="sub-menu">
                                        <li><a href="#myModalNorm" data-toggle="modal" data-target="#myModalNorm">New</a></li>
                                        <li><a href="movies.html">Search</a></li>
                                    </ul>
                                </li>
                                <li><a  href="#"><i className="icon-camera"></i>HELP</a></li>
                                <li><a  href="#"><i className="icon-bullhorn"></i>ABOUT US</a></li>
                                <li><a  href="#"><i className="icon-envelope-alt"></i>CONTACT</a></li>
                            </ul>
                        </nav>

                    </section>
                </header>
            </div>

        );
    }
}


export default Menu;