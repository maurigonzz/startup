import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import MoviePage from './moviePage.jsx'
import MoviesPage from './moviesPage.jsx'
import MovieList from './moviesList.jsx'
import FilterBar from './filterBar.jsx'




class App extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Menu/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}


ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {MoviesPage} />
            <Route path = "menu" component = {Menu} />
            <Route path = "moviesPage" component = {MoviesPage} />
            <Route path = "moviePage/:id" component = {MoviePage} />

        </Route>
    </Router>
,

    //<App/>,
    document.getElementById('container')
);