import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import MoviePage from './moviePage.jsx'
import MovieList from './moviesList.jsx'
import FilterBar from './filterBar.jsx'



class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {filtro:'All', genre: ''};
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





    render(){
        return(
        <div>
            <Menu/>
            <FilterBar changeFilter={this.changeFilter.bind(this)} changeGenre={this.changeGenre.bind(this)}/>
            <MovieList filtro={this.state.filtro} genre={this.state.genre}/>
            <Footer/>

        </div>
            //<div>Hello world!</div>
        );
  }
}


ReactDOM.render(
  <App/>,
  document.getElementById('container')
);