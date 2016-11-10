import React, {Component} from 'react';
import './movieDataSheet.scss';

export default class MovieData extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const titleStyle = { size: 30, fontFamily: 'Myriad Pro'};
        const plotStyle = { width: '100%', fontSize: 16, display: 'inline-block'}

        return (
            <div>
                <section id="movieDataSheetSection">

                    <section id="posterSection">
                        <img id="pPoster" src={this.props.poster} width="100%" align="top"/>
                    </section>

                    <section id="descriptionSection">
                        <h1 id="pTitle" style={titleStyle}>{this.props.title}</h1>
                        <p id="pYear">{this.props.year}</p>
                        <p id="pGenre">{this.props.genre}</p>
                        <p id="pDirector">{this.props.director}</p>
                        <p id="pActors">{this.props.actors}</p>
                        <p id="pRating">{this.props.rating}</p>
                        <p id="pPlot" style={plotStyle}>{this.props.plot}</p>
                    </section>
                </section>
            </div>
        );
    }
}