/**
 * Created by mauriciogonzalez on 26/10/16.
 */
var movies;

$( document ).ready(function() {
    loadTemplate();
    loadGenres();
    loadMovies();
    loadModalAttributes();

});


//Load Menu, footer and modal template
function loadTemplate(){
    $( "#header" ).load( "template.html #menu" );
    $( "#footer" ).load( "template.html #footerSection" );
    $( "#modal" ).load( "template.html #modalSection" );

}


//Print all movies event.
$( "#allButton" ).click(function(){
    getAllMovies();

});



//Print movies event sort by rating.
$( "#popularButton" ).click(function(){
    getBestRated();

});

///Print movies event sort by released date.
$( "#recentButton" ).click(function(){
    getLastReleased();
});


//Input Search event.
$( "#searchButton" ).click(function(){
    var text = document.getElementById("inputSearch").value;
    searchMovie(text,allMoviesByDefault);

});

//Change genre event.
$("#selectGenres").change(function () {
    var sel = document.getElementById('selectGenres').value;
    getMoviesByGenre(sel);
});


//Search a movie on every change of the input search component.
$("#inputSearch").on('change keydown paste input',function () {
    var text = document.getElementById("inputSearch").value;
    if (text == ""){
        printMovies(movies);
    } else {
        searchMovie(text);
    }
});



//Load movies from the Server.
function loadMovies() {
    $.get("http://localhost:8000/api/movies", function(data){
        //alert("SERVER CONNECTED");
    }).success(function(data) {
        movies = data;
        //getGenres();
        printMovies(movies);


    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}



//Generate the html code to print the movies.
function printMovies(mov) {

    var moviesCant = mov.length;
    var imagenes = '';
    var max = 0;
    for (i = 0; i < moviesCant; i++) {
        imagenes += '<div class="responsive"><div class="img">';
        var url = "movieDataSheet.html?id=" + mov[i].id;


        var texto = '<p style="width: 100%; display: inline-block;">' + mov[i].title + '</br>'+ mov[i].year + '</br>Rating: '+ mov[i].rating + '</br>'+ mov[i].genre +'</p>';
        //var texto = "Title"

        imagenes += '<a href="'+ url +'"><img src="' + mov[i].poster + '" width="400" height="600"></a><div class="desc">'+ texto+'</div>';
        max = max + 1;



        imagenes += "</div></div>";
    }
    imagenes += '<div class="clearfix"></div>';

    document.getElementById("postersSection").innerHTML = imagenes;
}



//Load the genres from the server.
function loadGenres() {
    $.get("http://localhost:8000/api/genres", function(data){

    }).success(function(data) {
        loadGenresIntoHTML(data);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });

}

//Generate the html code for the genre's select component
function loadGenresIntoHTML(genres) {
    var sel = document.getElementById('selectGenres');
    for(var i = 0; i < genres.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = genres[i];
        opt.value = genres[i];
        sel.appendChild(opt);
    }
}

////Load movies from the Server.
function getAllMovies() {
    $.get("http://localhost:8000/api/movies", function(data){

    }).success(function(data) {
        printMovies(data);


    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}



//Load movies from the Server sorted by rating.
function getBestRated() {
    $.get("http://localhost:8000/api/movies?order=rating", function(data){

    }).success(function(data) {
        printMovies(data);


    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}


//Load movies from the Server sorted by released date.
function getLastReleased() {
    $.get("http://localhost:8000/api/movies?order=released  ", function(data){

    }).success(function(data) {
        printMovies(data);


    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}

//Search a movie in the server.
function searchMovie(str) {
    var url = "http://localhost:8000/api/movies?search=" + str;
    $.get(url, function(data){

    }).success(function(data) {
        printMovies(data);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });

}

//Load the movies from the server with the genre as parameter.
function getMoviesByGenre(gen) {
    var url = "http://localhost:8000/api/movies?genre=" + gen;
    $.get(url, function(data){

    }).success(function(data) {
        printMovies(data);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}

