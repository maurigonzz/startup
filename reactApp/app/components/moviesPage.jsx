import React, {Component} from 'react';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import MoviePage from './moviePage.jsx'
import MovieList from './moviesList.jsx'
import FilterBar from './filterBar.jsx'

export default class MoviesPage extends React.Component{
    constructor(props) {
        super(props)
        this.state = {filtro:'All', genre: '', text:''};
    }


    changeFilter(fil) {
        //alert('BIND OK');
        //alert(fil);
        this.setState({filtro: fil});
        //alert(this.state.filtro);
    }

    changeGenre(fil, gen) {
        //alert('BIND OK');
        //alert(fil);
        //alert(gen);
        this.setState({filtro: fil});
        this.setState({genre: gen});
        //alert(this.state.filtro);
    }

    changeInputSearch(fil, text){
        console.log(text);
        //alert(fil);
        this.setState({filtro: fil});
        this.setState({text: text});
    }




    render(){
        return(
        <div>
            <FilterBar changeFilter={this.changeFilter.bind(this)} changeGenre={this.changeGenre.bind(this)} changeInputSearch={this.changeInputSearch.bind(this)}/>
            <MovieList filtro={this.state.filtro} genre={this.state.genre} text={this.state.text}/>
        </div>
        );
  }
}