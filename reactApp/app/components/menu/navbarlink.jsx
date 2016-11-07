import React from 'react';
import './menu.scss';


class NavBarLink extends React.Component {
    render() {
        return (
            <a href={this.props.url}>{this.props.text}</a>

        );
    }
}


export default NavBarLink;
