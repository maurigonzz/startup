import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router';
import Footer from './footer.jsx';
import Menu from './menu.jsx';
import MoviePage from './moviePage.jsx';
import MoviesPage from './moviesPage.jsx';
import MovieModal from './modal.jsx';
import Home from './home.jsx';
import Help from './help.jsx';
import ContactUs from './contactUs.jsx';
import About from './about.jsx';


class App extends React.Component{
    constructor(props) {
        super(props)
        this.state = {newMovie: ''};
        this.state = {isModalOpen: false};
    }


    handleOpenModal(open) {
        this.setState({isModalOpen: open});
    }


    render(){
        return(
            <div>
                <Menu openModal={this.handleOpenModal.bind(this)}/>
                <MovieModal isOpen={this.state.isModalOpen} closeModal={this.handleOpenModal.bind(this)}/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

//Using React Route and Link Navigation
ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path = "/" component = {App}>
            <IndexRoute component = {MoviesPage} />
            <Route path = "moviesPage" component = {MoviesPage} />
            <Route path = "home" component = {Home} />
            <Route path = "moviePage/:id" component = {MoviePage} />
            <Route path = "help" component = {Help} />
            <Route path = "contactUs" component = {ContactUs} />
            <Route path = "about" component = {About} />
        </Route>
    </Router>
,
    document.getElementById('container')
);