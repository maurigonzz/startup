import React, {Component} from 'react';

export default class ContactUs extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){
        const advStyle = { color: 'white'};
        return(
            <div style={advStyle}>
                <div className="container">
                    <h1>Contact Us</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input type="name" className="form-control" id="Name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Email1">Email</label>
                            <input type="email" className="form-control" id="Email1" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Inputselect">Message</label>
                            <textarea className="form-control" placeholder="Message" ></textarea>


                        </div>


                        <button type="submit" className="btn btn-info">Send Information</button>
                    </form>
                </div>
            </div>
        );
    }
}