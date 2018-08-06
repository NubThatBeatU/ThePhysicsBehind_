// Get and display the data for all items
var getDataForList = function() {
  // 1. Connects the data from the Airtable API
  $.getJSON(`https://api.airtable.com/v0/appSrgke7E0ElZhMY/Locations?api_key=${api_key}&view=Rating`, function( data ) {
  
  //make a list called html  
  var html = [];
  
  //before the html for the cards you need to make a class to help 
  //with bootstrap template and organize the rows
  html.push(`<div class="row">`);
  
  //For each record (that is considered data) run the function that uses the value of the index.
  //The index is the row number in airtable, and sets it as a value, and the "each" implies to
  //do this for each value in the index
    $.each( data.records, function( index, val ) {
      // console.log(val.fields)

      //sets the value of the id and field to "id" and "field" indiviually, to all of the indexes.
      var id = val.id;
      var fields = val.fields;

      //sets the values of fields to their correcponding name, for a single index at a time.
      var name = fields["Name"];
      var pictureUrl = fields["Pictures"] ? fields["Pictures"][0].url : '';
      var neighborhood = fields["Neighborhood"];
      var rating = fields["Rating"];
     
     //After matchinging all the categories with their values, we put together the html fora single index
      var itemHTML = listView(id, name, pictureUrl, neighborhood, rating);

    //add the html of a single index to the "html" list, which will be moved to the html file.
      html.push(itemHTML);
    });
    
    //ends closes the div class
    html.push(`</div>`);
    
    //add the "html" list commands to the place where "list-view" the class is used (in html file line 20)
    $(".list-view").append(html.join(""));
  });
}
