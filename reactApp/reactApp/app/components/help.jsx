import React, {Component} from 'react';
import './home.scss';
import './galleryImage.scss';


export default class Help extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){
        const advStyle = { color: 'white', width: '100%', textAlign: 'center'};
        return(
            <div style={advStyle}>
                <h1>Help Section</h1>
                <p style={advStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate semper nulla, vitae ornare augue convallis posuere. Nulla eu fermentum velit. Etiam in consectetur risus. Maecenas nec egestas nisl, non malesuada tortor. Integer lobortis enim eu odio tempus, quis pretium metus imperdiet. Donec tempor quis purus ultricies maximus. Sed neque eros, venenatis malesuada augue sit amet, posuere tincidunt ligula. Curabitur gravida quam ut mauris convallis</p>
                <p style={advStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate semper nulla, vitae ornare augue convallis posuere. Nulla eu fermentum velit. Etiam in consectetur risus. Maecenas nec egestas nisl, non malesuada tortor. Integer lobortis enim eu odio tempus, quis pretium metus imperdiet. Donec tempor quis purus ultricies maximus. Sed neque eros, venenatis malesuada augue sit amet, posuere tincidunt ligula. Curabitur gravida quam ut mauris convallis</p>
                <p style={advStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate semper nulla, vitae ornare augue convallis posuere. Nulla eu fermentum velit. Etiam in consectetur risus. Maecenas nec egestas nisl, non malesuada tortor. Integer lobortis enim eu odio tempus, quis pretium metus imperdiet. Donec tempor quis purus ultricies maximus. Sed neque eros, venenatis malesuada augue sit amet, posuere tincidunt ligula. Curabitur gravida quam ut mauris convallis</p>
                <p style={advStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate semper nulla, vitae ornare augue convallis posuere. Nulla eu fermentum velit. Etiam in consectetur risus. Maecenas nec egestas nisl, non malesuada tortor. Integer lobortis enim eu odio tempus, quis pretium metus imperdiet. Donec tempor quis purus ultricies maximus. Sed neque eros, venenatis malesuada augue sit amet, posuere tincidunt ligula. Curabitur gravida quam ut mauris convallis</p>
                <p style={advStyle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vulputate semper nulla, vitae ornare augue convallis posuere. Nulla eu fermentum velit. Etiam in consectetur risus. Maecenas nec egestas nisl, non malesuada tortor. Integer lobortis enim eu odio tempus, quis pretium metus imperdiet. Donec tempor quis purus ultricies maximus. Sed neque eros, venenatis malesuada augue sit amet, posuere tincidunt ligula. Curabitur gravida quam ut mauris convallis</p>
            </div>
        );
    }
}