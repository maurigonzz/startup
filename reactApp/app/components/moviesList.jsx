import React, {Component} from 'react';

import './galleryImage.scss';

export default class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = { movies: [], filter: ''}

        this.getMovies(this.props.filtro, this.props.genre);
    }



    componentWillReceiveProps(nextProps) {
        // You don't have to do this check first, but it can help prevent an unneeded render
        if ((nextProps.filtro !== this.props.filtro) || (nextProps.genre !== this.props.genre)) {
            this.getMovies(nextProps.filtro, nextProps.genre);
        }
    }


    getMovies(fil, gen){
        switch(fil) {
            case "All":
                this.loadAllMovies();
                break;
            case "Popular":
                this.loadBestRated();
                break;
            case "Released":
                this.loadLastReleased();
                break;
            case "Genre":
                this.loadMoviesByGenre(gen);
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


    /* Para concatenar filtros
    generateUrl(fil,gen){

    }
    */

    loadAllMovies(){
        var url = 'http://localhost:8000/api/movies';
        this.loadMovies(url);
    }

    loadBestRated(){
        var url = 'http://localhost:8000/api/movies?order=rating';
        this.loadMovies(url);
    }

    loadLastReleased(){
        var url = 'http://localhost:8000/api/movies?order=released';
        this.loadMovies(url);
    }

    loadMoviesByGenre(gen){
        var url = 'http://localhost:8000/api/movies?genre=' + gen;
        if (gen == 'All'){
            url = 'http://localhost:8000/api/movies';
        }
        this.loadMovies(url);
    }






    render() {
        return (
            <div>
                {console.log(this.state.movies)}
                {
                    this.state.movies.map(function(m){
                        var text = m.title + m.year;
                       // mov[i].title + '</br>'+ mov[i].year + '</br>Rating: '+ mov[i].rating + '</br>'+ mov[i].genre
                        return (
                            <div key={m.id} className="responsive">
                                <div  key={m.id} className="img">
                                     <img key={m.id} src={m.poster}/>

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