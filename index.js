/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdwnFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
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

var airtable_list_url = 'https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Scenarios?api_key=keydAzPGwjvMQfQvV'

// { <a href ="/?id=${id}">${name}</a>
// var detailpage = function (Scenarios, representations, Basic, ME, Force) {
//   return `<div class="detailview">
//     <div class="card mb-4 box-shadow">
//       <img class="card-img-top" src="${pictureUrl}">
//       <div class="card-body">
//         <h1>${name}</h1>
//         <p class="card-text">${neighborhood}</p>
//         <p class="card-text">${address}</p>
//         <div class="d-flex justify-content-between align-items-center">
//           <small class="text-muted">${rating}</small>
//           <small class="text-muted">${cost}</small>
//         </div>
//         ${website ? `<a href="${website}">${website}</a>`: ``}
//         <hr />
//         <a href="https://www.google.com/maps/search/${name} ${address}">
//           <img alt="Map of Location" src="https://api.mapbox.com/v4/mapbox.streets/${long},${lat},15/600x200.jpg?access_token=pk.eyJ1IjoibHVuYXJvamEiLCJhIjoiY2o4b2x1NXlmMDN6NDMzbWtpMzExM3ppdiJ9.M8L9FACjOXRrZWrkurNjTg" />
//         </a>
//       </div>
//     </div>
//   </div>`;
// } }

// }
// $.getJSON("https://api.airtable.com/v0/appxlFoELDnWhjbSQ/Different%20Representations?api_key=keydAzPGwjvMQfQvV", function( data ) {
//     console.log(data.records);
//     var physics = [];
//     //console.log(data)
//     $(".list-view").append(html.join(""));
//   });