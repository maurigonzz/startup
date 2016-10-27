/**
 * Created by mauriciogonzalez on 27/10/16.
 */
//Inicilaiza los componente luego de que esté listo la carga del DOM Html.

$( document ).ready(function() {
    loadTemplate();
    loadModalAttributes();

    getBestRated();


});



function loadTemplate(){
    $( "#header" ).load( "template.html #menu" );
    $( "#footer" ).load( "template.html #footerSection" );
    $( "#modal" ).load( "template.html #modalSection" );

}


//API
function getBestRated() {
    $.get("http://localhost:8000/api/movies?order=rating&limit=3", function(data){

    }).success(function(data) {
        printMovies(data);


    }).fail(function(jqXHR, textStatus, errorThrown) {
        alert("ERROR: No se pudo conectar al servidor: " + textStatus + jqXHR + errorThrown);

    });
}

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