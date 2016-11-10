import React, {Component} from 'react';
import './template.scss';

export default class FilterBar extends Component {
    constructor(props) {
        super(props);
        this.state = { genres: [], filter: ''}
    }

    componentWillMount() {
        this.loadGenres();
    }


    loadGenres(){
        var url = 'http://localhost:8000/api/genres';
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((gen) => {
                this.setState({ genres: gen })


            }).catch((error) => {
            console.error(error);
        });
    }


    handleAllMovies(e) {
        this.props.changeFilter('All');
    }

    handlePopularMovies(e) {
        this.props.changeFilter('Popular');
    }

    handleReleasedMovies(e) {
        this.props.changeFilter('Released');
    }

    handleGenreChange(e) {
        var genre = e.target.value;
        this.props.changeGenre('Genre',genre);
    }

    handleInputChange(e) {
        var text = e.target.value;
        this.props.changeInputSearch('Text',text);
    }

    render(){
        return(
            <div>
                <section id="searchSection">
                    <ul className="filterOptions" >
                        <li><a href="#" id="allButton" onClick={this.handleAllMovies.bind(this)}><i className="icon-home"></i>ALL</a></li>
                        <li><a  href="#" id="popularButton" onClick={this.handlePopularMovies.bind(this)}><i className="icon-user"></i>POPULAR</a></li>
                        <li><a  href="#"id="recentButton" onClick={this.handleReleasedMovies.bind(this)}><i className="icon-bullhorn"></i>RECENT</a></li>
                        <li><Genres genres={this.state.genres} selectedGenre={this.handleGenreChange.bind(this)}/></li>
                        <li><input id="inputSearch" onChange={this.handleInputChange.bind(this)}/></li>
                    </ul>
                 </section>
            </div>
        );
    }
}

//Component represent a select componenent of Genres.
class Genres extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div>
                <select id="selectGenres" name="generos" defaultValue='All' onChange={this.props.selectedGenre.bind(this)}>
                    <option key='All' value='All'>All</option>
                    {
                        this.props.genres.map(function(gen){
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
