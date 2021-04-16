// from data.js
var tableData = data;
var tableLength = data.length;
console.log(data);

// Function to fill html table with data
function buildTable(data) {
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    var trow;
    for (var i = 0; i < tableLength; i++) {
        trow = tbody.append("tr");
        trow.append("td").text(data[i].datetime);
        trow.append("td").text(data[i].city);
        trow.append("td").text(data[i].state);
        trow.append("td").text(data[i].country);
        trow.append("td").text(data[i].shape);
        trow.append("td").text(data[i].durationMinutes);
        trow.append("td").text(data[i].comments);
    }
}

// call function with our json data
buildTable(tableData);

// Listen for events changes i.e. button clicked
d3.select("#filter-btn").on("click", filterTable);
d3.select("#filter-btn").on("submit", filterTable);

// This function is called when a dropdown menu item is selected
function filterTable() {

    
    d3.event.preventDefault();

    // Use D3 to select the forms
    var dateForm = d3.select("#datetime");
    var dateInput = dateForm.property("value");
    var cityForm = d3.select("#city");
    var cityInput = cityForm.property("value");
    
    var stateForm = d3.select("#state");
    var stateInput = stateForm.property("value");
    
    var countryForm = d3.select("#country");
    var countryInput = countryForm.property("value");
    
    var shapeForm = d3.select("#shape");
    var shapeInput = shapeForm.property("value");


    // var input = document.getElementById("#datetime");
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {

        console.log(tr[i]);
        var tdDate = tr[i].getElementsByTagName("td")[0].innerText;
        var tdCity = tr[i].getElementsByTagName("td")[1].innerText;
        var tdState = tr[i].getElementsByTagName("td")[2].innerText;
        var tdCountry = tr[i].getElementsByTagName("td")[3].innerText;
        var tdShape = tr[i].getElementsByTagName("td")[4].innerText;
               
        if ((tdDate == dateInput || dateInput == "") && (tdCity == cityInput || cityInput == "") && (tdState == stateInput || stateInput == "") && (tdCountry == countryInput || countryInput == "") && (tdShape == shapeInput || shapeInput == "")) {
            tr[i].style.display = "";
        }

        else {
            tr[i].style.display = "None";
        }
    }
}
