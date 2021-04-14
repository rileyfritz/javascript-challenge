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
d3.select("#filter-btn").on("click", filterTable);

// This function is called when a dropdown menu item is selected
function filterTable() {

    
    d3.event.preventDefault();

    // Use D3 to select the date form
    var dateForm = d3.select("#datetime");

    // Assign the value of the date form to variable
    var input = dateForm.property("value");

    // var table = d3.select("#ufo-table");
    // var tbody = table.select("tbody");   
    // var rows = tbody.selectAll("tr");

    // console.log(rows);

    // var input = document.getElementById("#datetime");
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) {

        console.log(tr[i]);
        console.log(input);
        var td = tr[i].getElementsByTagName("td")[0].innerText;
        console.log(td);
        if (td == input) {
            tr[i].style.display = "";
        }

        else if (input === "") {
            tr[i].style.display = "";
        }

        else {
            tr[i].style.display = "None";
        }
    }
}
