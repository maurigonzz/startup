import React from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';

export default class MovieModal extends React.Component{
    constructor(props) {
        super(props);
        this.state = {showModal: this.props.isOpen};
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
        this.state = { genres: [],
                        date: new Date().toISOString().slice(0,10),
                        rating:[1,2,3,4,5],
                        title:'', genreSelected:'', poster:'', director:'', released: new Date().toISOString().slice(0,10), ratingSelected: Math.floor(Math.random() * 5) + 1,
                        actors:'', plot:'',
                        id: this.getMovieId()};

        this.loadGenres();
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handlePosterChange = this.handlePosterChange.bind(this);
        this.handleDirectorChange = this.handleDirectorChange.bind(this);
        this.handleActorsChange = this.handleActorsChange.bind(this);
        this.handleReleasedChange = this.handleReleasedChange.bind(this);
        this.handlePlotChange = this.handlePlotChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }


    close() {
        this.setState({showModal: false});
        this.setDefaultValues();
        this.props.closeModal(false);
    }


    open() {
        this.setState({showModal: true});
    }


    handleTitleChange(event) {
        this.setState({title: event.target.value});
    }

    handlePosterChange(event) {
        this.setState({poster: event.target.value});
    }

    handleDirectorChange(event) {
        this.setState({director: event.target.value});
    }

    handleGenreChange(event) {
        this.setState({genreSelected: event.target.value});
    }

    handleActorsChange(event) {
        this.setState({actors: event.target.value});
    }

    handlePlotChange(event) {
        this.setState({plot: event.target.value});
    }

    handleReleasedChange(event) {
        this.setState({released: event.target.value});
    }

    handleRatingChange(event) {
        this.setState({ratingSelected: event.target.value});
    }



    //Submit the movie to the Api.
    handleSubmit(event) {
        event.preventDefault();
        var movie = {
            title: this.state.title,
            year: this.state.released.slice(0,4),
            released: this.state.released,
            genre: this.state.genreSelected,
            director: this.state.director,
            actors: this.state.actors,
            plot: this.state.plot,
            poster: this.state.poster,
            rating: this.state.ratingSelected
        }

        this.createMovie(movie);

    }


    loadGenres(){
        var url = 'http://localhost:8000/api/genres';
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((gen) => {
                this.setState({ genres: gen, genreSelected: gen[0]})

            }).catch((error) => {
            console.error(error);
        });
    }


    getMovieId(){
        var url = 'http://localhost:8000/api/movies';
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((mov) => {
                this.setState({ id: mov.length+1});

            }).catch((error) => {
            console.error(error);
        });
    }



    setDefaultValues(){
        this.setState({
            title:'',
            poster:'',
            director:'',
            released: new Date().toISOString().slice(0,10),
            ratingSelected: Math.floor(Math.random() * 5) + 1,
            actors:'',
            plot:''});
    }



    createMovie(mov){
        var url = 'http://localhost:8000/api/movies';
        fetch(url, {
            method: "POST",
            mode: "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(mov)
        }).then((result) => {
            console.log(result);
        }).then(() => {
            hashHistory.push('moviePage/'+ this.state.id);
            this.close();
        });
    }


    render() {

        return (
            <div>
                <Modal show={this.props.isOpen} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>NEW MOVIE</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <form id="modalForm" onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="title">Title:</label>
                                <input type="text" value={this.state.title} onChange={this.handleTitleChange} id="title" name="movie_title" placeholder="Enter title" maxLength="80" required/>
                            </div>

                            <div>

                                <label htmlFor="genres">Genre:</label>
                                <SelectOptions id="rating" options={this.state.genres} selectedOpt={this.handleGenreChange}/>

                            </div>

                            <div>
                                <label htmlFor="poster">Poster:</label>
                                <input type="url" value={this.state.poster} onChange={this.handlePosterChange} id="poster"  name="movie_poster" placeholder="Enter url"required/>
                            </div>

                            <div>
                                <label htmlFor="director">Director:</label>
                                <input type="text" value={this.state.director} onChange={this.handleDirectorChange}id="director" name="movie_director" placeholder="Enter director" required/>
                            </div>

                            <div>
                                <label htmlFor="released">Released:</label>
                                <input type="date" value={this.state.released} onChange={this.handleReleasedChange} id="released" name="movie_released" defaultValue={this.state.date}/>
                            </div>

                            <div>
                                <label htmlFor="rating">Rating:</label>
                                <SelectOptions options={this.state.rating} default={this.state.ratingSelected} selectedOpt={this.handleRatingChange}/>
                            </div>

                            <div>
                                <label htmlFor="actors">Actors:</label>
                                <input type="text" id="actors" value={this.state.actors} onChange={this.handleActorsChange}name="movie_actors" placeholder="Enter actors"required/>
                            </div>


                            <div>
                                <label htmlFor="plot">Plot:</label>
                                <br/>
                                <textarea id="plot" value={this.state.plot} onChange={this.handlePlotChange}name="movie_plot" placeholder="Enter plot" maxLength="250"></textarea>
                             </div>


                            <Modal.Footer>
                                <input type="submit" value="Save" className="btn btn-primary"/>
                                <Button onClick={this.close} bsStyle="danger">Close</Button>
                            </Modal.Footer>

                        </form>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }



}

class SelectOptions extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <select id="selectGenres" name="generos" defaultValue={this.props.default} onChange={this.props.selectedOpt}>
                    {
                        this.props.options.map(function(gen){
                            return (
                                <option key={gen} value={gen}>{gen}</option>
                            )

                        })
                    }
                </select>
            </div>
        );
    }

}


