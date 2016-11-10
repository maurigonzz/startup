import React, {Component} from 'react';
import MovieList from './moviesList.jsx'
import FilterBar from './filterBar.jsx'

export default class MoviesPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {filtro:'All', genre: '', text:''};
    }


    changeFilter(fil) {
        this.setState({filtro: fil});
    }

    changeGenre(fil, gen) {
        this.setState({filtro: fil});
        this.setState({genre: gen});
    }

    changeInputSearch(fil, text){
        this.setState({filtro: fil});
        this.setState({text: text});
    }



    render(){
        return(
        <div>
            <FilterBar changeFilter={this.changeFilter.bind(this)} changeGenre={this.changeGenre.bind(this)} changeInputSearch={this.changeInputSearch.bind(this)}/>
            <MovieList filtro={this.state.filtro} genre={this.state.genre} text={this.state.text} limit='0'/>
        </div>
        );
  }
}