function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }

// from data.js
var tableData = data;
// var datetimes = unpack(datetime, 0);

console.log(data[0].datetime);

// function buildTable(dates, openPrices, highPrices, lowPrices, closingPrices, volume) {
//     var table = d3.select("#summary-table");
//     var tbody = table.select("tbody");
//     var trow;
//     for (var i = 0; i < 12; i++) {
//       trow = tbody.append("tr");
//       trow.append("td").text(dates[i]);
//       trow.append("td").text(openPrices[i]);
//       trow.append("td").text(highPrices[i]);
//       trow.append("td").text(lowPrices[i]);
//       trow.append("td").text(closingPrices[i]);
//       trow.append("td").text(volume[i]);
//     }
//   }