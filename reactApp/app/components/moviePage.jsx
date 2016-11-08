import React, {Component} from 'react';
import MovieDataSheet from './movieDataSheet.jsx'

export default class MoviePage extends Component {
    constructor(props) {
        super(props);
        this.state = { movie: '' }

    }

    componentWillMount() {
        var id = this.props.params.id;
        var url = 'http://localhost:8000/api/movies/' + id;
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((mov) => {

                this.setState({ movie: mov })
                console.log(mov);

            }).catch((error) => {
            console.error(error);
        });
    }


    render() {
        return (
            <div>
                <MovieDataSheet title={this.state.movie.title}
                                year={this.state.movie.year}
                                poster={this.state.movie.poster}
                                genre={this.state.movie.genre}
                                director={this.state.movie.director}
                                actors={this.state.movie.actors}
                                rating={this.state.movie.rating}
                                plot={this.state.movie.plot}
                />

            </div>
        );
    }
}