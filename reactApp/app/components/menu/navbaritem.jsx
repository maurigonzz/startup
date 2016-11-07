import React from 'react';
import NavBarLink from './navbarlink.jsx';
import './menu.scss';


class NavBarItem extends React.Component {

    generateLink(){
    //Right now we don't need our class but what if we wanted to change the text, add an arrow or something?
    //Single responsibility principles tell us that it our "Item" should not handle this.
    return <NavBarLink url={this.props.url} text={this.props.text} />;
    }

    generateSubmenu(){
    //We generate a simple Navbar (the parent).
    //Spoilers: it takes items as its argument.
    return <NavBar items={this.props.submenu} />
    }

    generateContent(){
        var content = [this.generateLink];
        if(this.props.submenu){
            //If there is a submenu in our data for this item
            //We add a generated Submenu to our content
            content.push(this.generateSubmenu);
        }
        return content;
    }


    render() {
        return (
            var content = this.generateContent;
            return (
                <li>
                    {content}
                </li>
        );
    }
}


export default NavBarItem;
