/**
 * Created by mauriciogonzalez on 22/10/16.
 */

var idMovie = parseInt(getURLParameter("id"));


//Inicilaiza los componente luego de que esté listo la carga del DOM Html.
$( document ).ready(function() {
    loadTemplate();
    loadMovie(idMovie);
    loadModalAttributes();

});


//Return the uri component od the url
function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}


function loadTemplate(){
    $( "#header" ).load( "template.html #menu" );
    $( "#footer" ).load( "template.html #footerSection" );
    $( "#modal" ).load( "template.html #modalSection" );

}



function loadMovie(idMovie) {
    var url = "http://localhost:8000/api/movies/" + idMovie;
    $.get(url, function(data){

    }).success(function(data) {
        loadMovieDataSheet(data);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}



function loadMovieDataSheet(mov){
    document.getElementById("pTitle").innerHTML = mov.title;
    document.getElementById("pPoster").src = mov.poster;
    document.getElementById("pYear").innerHTML = "Year: " + mov.year;
    document.getElementById("pGenre").innerHTML = "Genre: " + mov.genre;
    document.getElementById("pDirector").innerHTML = "Director: " + mov.director;
    document.getElementById("pActors").innerHTML = "Actors: " + mov.actors;
    document.getElementById("pRating").innerHTML = "Rating: " + mov.rating;
    document.getElementById("pPlot").innerHTML = mov.plot;
}

/*
function loadPreviousNextMovie(id, mov) {
    idlast = mov.length;
    var idNext = id + 1;
    var idPrev = id - 1;
    urlNext = "movieDataSheet.html?id=" + idNext;
    urlPrev = "movieDataSheet.html?id=" + idPrev;
    document.getElementById("next").href = urlNext;
    document.getElementById("previous").href = urlPrev;

    if (id == 1){
        document.getElementById("previous").style.visibility = "hidden";
    }
    if (id == idlast){
        document.getElementById("next").style.visibility = "hidden";
    }

}
    */