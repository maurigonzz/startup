import React from 'react';
import { Link} from 'react-router';
import './menu.scss';

class Menu extends React.Component {

    handleOpenModal(e) {
        this.props.openModal(true);
    }


    render() {
        return (
            <div>
                {this.props.children}
                <header id="header">
                    <section id="menu">
                        <nav id="menu_gral">
                            <ul className="menu">
                                <li><Link to="home">HOME</Link></li>
                                <li><Link to="moviesPage">MOVIES</Link>
                                    <ul className="sub-menu">
                                        <li><a href="#" id="newButton" onClick={this.handleOpenModal.bind(this)}><i className="icon-home"></i>New</a></li>
                                        <li><Link to="moviesPage">Search</Link></li>
                                    </ul>
                                </li>

                                <li><Link to="help" >HELP</Link></li>
                                <li><Link to="about" >ABOUT</Link></li>
                                <li><Link to="contactUs" >CONTACT</Link></li>
                            </ul>
                        </nav>

                    </section>
                </header>
            </div>

        );
    }
}


export default Menu;