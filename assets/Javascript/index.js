(function() {
  var current_result = '';

  function searchByInput() {
    $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&continue=&srsearch=" + (document.getElementById("search_input").value) + "&srwhat=text&srprop=timestamp&prop=info&inprop=url&origin=*", function(result) {
      console.log(result);
      current_result = result;
      for (var i = 0; i < 10; i++) {
        console.log("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid);
        $("#search_link" + (i + 1)).attr("href", ("https://en.wikipedia.org/?curid=" + result.query.search[i].pageid));
        $("#search_link" + (i + 1)).html(result.query.search[i].title);
      }
    });
  }

  $(window).load(function() {
    $("#search_button").on("click", searchByInput);
  });
}());