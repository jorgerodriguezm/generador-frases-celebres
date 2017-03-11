# Generador de Frases Célebres
Parte de los proyectos de dificultad intermedia en desarrollo Front End de freeCodeAcademy.

![Generador de Frases Célebres](https://github.com/jorgerodriguezm/generador-frases-celebres/blob/master/README_images/generador_frases_celebres.png) 

## JSON usado para la llamada API
```
$("#randomquote").on("click", function() {
  $.ajaxSetup({
    cache: false
  });

  $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&&format=jsonp&jsonp=?&lang=en", 
            function(data) {
    $("#text").html(data.quoteText);
    $("#author").html(data.quoteAuthor);
   
  });
});

$("#tweet-quote").on("click", function(){
window.open('http://twitter.com/intent/tweet?text=' + $('#text').text() + "- " + $('#author').text());
  
});
```
