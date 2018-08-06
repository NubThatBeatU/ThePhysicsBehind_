/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

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

var listView = function(id, The_scenarios) {
  return `<a href="index.html?id=${id}">${The_scenarios}</a>`;
  //`<a href="#${Scenario_page_text}>${The_scenarios}</a>`;
}

var airtable_list_url = 'https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV'

  // 1. Gets the data from the Airtable API
  $.getJSON("https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV", function( data ) {
    // console.log(data.records);
    var html = [];
    // 2. Iterates over every record and uses the list template
    $.each( data.records, function( index, val ) {
      // console.log(val.fields)
      var id = val.id
      var fields = val.fields;
      var The_scenarios = fields["The_scenarios"];
      // var Scenario_page_text = fields["Scenario_page_text"];
      var itemHTML = listView(id, The_scenarios);
      html.push(itemHTML);
      
    });
    // 3. Adds HTML for every item to our page
    $(".listView").append(html.join(""));
  });

