import React from 'react';
import { Link} from 'react-router';
import './menu.scss';

class Menu extends React.Component {
    render() {
        return (
            <div>
                {this.props.children}
                <header id="header">
                    <section id="menu">
                        <nav id="menu_gral">
                            <ul className="menu">
                                <li><Link to="moviePage">HOMES</Link></li>
                                <li><Link to="moviesPage">MOVIES</Link>
                                    <ul className="sub-menu">
                                        <li><Link to="">New</Link></li>
                                        <li><Link to="moviesPage">Search</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="" >HELP</Link></li>
                                <li><Link to="" >ABOUT</Link></li>
                                <li><Link to="" >CONTACT</Link></li>
                            </ul>
                        </nav>

                    </section>
                </header>
            </div>

        );
    }
}


export default Menu;