import React, {Component} from 'react';
import MovieList from './moviesList.jsx';
import './home.scss';


export default class Home extends React.Component{
    constructor(props) {
        super(props)
    }


    render(){
        const advStyle = { width: '100%'}
        return(
            <div>
                    <section id="centerSection">
                        <h1>Last Released Movies!</h1>
                        <MovieList filtro='Released' limit='6'/>
                    </section>

                    <aside id="aside">
                                <img src='https://image.winudf.com/1282/0266b2fc73c3023b/screen-0.jpg' style={advStyle}/>
                    </aside>

            </div>
        );
    }
}