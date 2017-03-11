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