/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
var api_key = 'keydAzPGwjvMQfQvV';

var listView = function(id, scenarios, representations, values, videos) {
  return `<div class="col-sm-3">
    <div class="card mb-4 box-shadow">
      <div class="card-body">
        <h2><a href="/?id=${id}">${name}</a></h2>
        <div class="d-flex justify-content-between align-items-center">
          <small class="text-muted">${rating}</small>
        </div>
      </div>
    </div>
  </div>`;
}

var getDataForList = function() {
  // 1. Gets the data from the Airtable API
  $.getJSON(`https://api.airtable.com/v0/appSrgke7E0ElZhMY/Locations?api_key=${api_key}&view=Rating`, function( data ) {
    // console.log(data.records);
    var html = [];
    html.push(`<div class="row">`);
    // 2. Iterates over every record and uses the list template
    $.each( data.records, function( index, val ) {
      // console.log(val.fields)
      var id = val.id;
      var fields = val.fields;
      var scenarios = fields["scenarios"];
      var representations = fields["representations"];
      var videos = fields["videos"];
      var itemHTML = listView(id, scenarios, pictureUrl, representations, videos);
      html.push(itemHTML);
    });
    html.push(`</div>`);
    // 3. Adds HTML for every item to our page
    $(".list-view").append(html.join(""));
  });

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}