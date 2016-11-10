import React, {Component} from 'react';
import { Link} from 'react-router';
import './galleryImage.scss';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], filter: ''}
        this.getMovies(this.props.filtro, this.props.genre, this.props.text, this.props.limit);
    }



    componentWillReceiveProps(nextProps) {
        if ((nextProps.filtro !== this.props.filtro) || (nextProps.genre !== this.props.genre) || (nextProps.text !== this.props.text)) {
            this.getMovies(nextProps.filtro, nextProps.genre, nextProps.text, nextProps.limit);
        }
    }


    getMovies(fil, gen, text, lim){
        switch(fil) {
            case "All":
                this.loadAllMovies();
                break;
            case "Popular":
                this.loadBestRated(lim);
                break;
            case "Released":
                this.loadLastReleased(lim);
                break;
            case "Genre":
                this.loadMoviesByGenre(gen);
                break;
            case "Text":
                this.loadMoviesByText(text);
                break;

        }

    }

    loadMovies(url){
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((mov) => {

                this.setState({ movies: mov })
                //console.log(mov);

            }).catch((error) => {
            console.error(error);
        });
    }



    loadAllMovies(){
        var url = 'http://localhost:8000/api/movies?order=id';
        this.loadMovies(url);
    }

    loadBestRated(lim){
        var url = 'http://localhost:8000/api/movies?order=rating';
        if(lim > 0){
            url += '&limit='+lim;
        }
        this.loadMovies(url);
    }

    loadLastReleased(lim){
        var url = 'http://localhost:8000/api/movies?order=released';
        if(lim > 0){
            url += '&limit='+lim;
        }
        this.loadMovies(url);
    }

    loadMoviesByGenre(gen){
        var url = 'http://localhost:8000/api/movies?genre=' + gen;
        if (gen == 'All'){
            url = 'http://localhost:8000/api/movies';
        }
        this.loadMovies(url);
    }

    loadMoviesByText(text){
        var url = 'http://localhost:8000/api/movies?search=' + text;
        this.loadMovies(url);
    }



    render() {
        return (
            <div>
                {
                    this.state.movies.map(function(m){
                        var text = m.title + m.year;
                        return (
                            <div key={m.id} className="responsive">
                                <div  key={m.id} className="img">
                                    <Link to={"moviePage/"+ m.id}>
                                        <img key={m.id} src={m.poster}/>
                                    </Link>
                                    <div className="desc">
                                        {m.title} <br/> {m.year} <br/> Rating: {m.rating} <br/> {m.genre}
                                    </div>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
        );
    }
}