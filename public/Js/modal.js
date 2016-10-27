/**
 * Created by mauriciogonzalez on 25/10/16.
 */


$( document ).ready(function() {
    //document.getElementById("released").valueAsDate = new Date();
    //loadModalGenres();
    //loadModalRating();


    //element.addEventListener('click', function() { alert("listener");}, false);



});



function loadModalAttributes() {
    $.get("http://localhost:8000/api/genres", function(data){

    }).success(function(data) {
        loadModalGenresIntoHTML(data);
        loadModalRating();
        document.getElementById("released").valueAsDate = new Date();

        //var submit = document.getElementById('submitNewMovie');
        //submit.addEventListener('click', createMovie, false);

        var close = document.getElementById('closeModalButton');
        close.addEventListener('click', resetModal, false);




    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });

}

//Load the genres into the modal.
function loadModalGenresIntoHTML(genres) {
    var sel = document.getElementById('genre');
    for(var i = 0; i < genres.length; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = genres[i];
        opt.value = genres[i];
        sel.appendChild(opt);
    }
}


//Load the rating values into the modal. The value is a random from 1 to 5.
function loadModalRating(){
    var sel = document.getElementById('rating');
    for(var i = 1; i <= 5; i++) {
        var opt = document.createElement('option');
        opt.innerHTML = i.toString();
        opt.value = i;
        sel.appendChild(opt);
    }

    valueSelected = Math.floor(Math.random() * 5) + 1;
    document.getElementById('rating').value = valueSelected;

}




//Get the input values and create the new movie doing the post to the server.
function createMovie() {
    var title = document.getElementById("title").value;
    var year = document.getElementById("released").value;
    var genre = document.getElementById("genre").value;
    var poster = document.getElementById("poster").value;
    var director = document.getElementById("director").value;
    var releasedDate = document.getElementById("released").value;
    var rating = document.getElementById("rating").value;
    var actors = document.getElementById("actors").value;
    var plot = document.getElementById("plot").value;

    //validateTitle(title);

    $.post('http://localhost:8000/api/movies',{
        "title": title,
        "year": year,
        "released": releasedDate,
        "genre": genre,
        "director": director,
        "actors": actors,
        "plot": plot,
        "poster": poster,
        "rating": rating
    }, function(data, status, xhr) {

    }).done(function() {

        alert('Movie Created!');
        resetModal();


    })
        .fail(function(jqxhr, settings, ex) { alert('ERROR: ' + ex); });


}




function validateTitle(title) {
    if(title != "" && title.length <80){
        document.getElementById('title').style.borderColor = "hsl(120, 50%, 50%)";
        document.getElementById('title').style.background = "hsl(120, 50%, 90%)";

        return true;
    }else{
        document.getElementById('title').style.borderColor = "hsl(0, 50%, 50%)";
        document.getElementById('title').style.background = "hsl(0, 50%, 90%)";
        return false;
    }

}


//Reset the input values of the modal.
function resetModal() {
    $("#modalForm").trigger("reset");
    document.getElementById("released").valueAsDate = new Date();

    valueSelected = Math.floor(Math.random() * 5) + 1;
    document.getElementById('rating').value = valueSelected;

}

