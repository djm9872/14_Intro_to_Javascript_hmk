// from data.js
var tableData = data;
console.log(tableData)
// YOUR CODE HERE!
var tbody = d3.select("tbody");

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  // Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select('#datetime').property('value');
  var inputCity = d3.select('#city').property('value');
  
  console.log(inputElement);
  console.log(inputCity);

  
  var filteredData = tableData.filter(event => event.datetime === inputElement)
 
  // var filteredData = Object.values(tableData).forEach((value) => {
  //   if (value === inputElement  && value === inputCity){
  //     tableData.filter(event => event.datetime === inputElement).filter(event => event.city === inputCity);
  //   }
  //   else if (value === inputElement){
  //     tableData.filter(event => event.datetime === inputElement);
  //   }
  //   else if (value === inputCity){
  //     tableData.filter(event => event.city === inputCity);
  //   }
  //   else {tableData;}
  // })

console.log(filteredData);

tableData.forEach((sighting) => {
    var emptyrow = d3.selectAll('tbody>tr');
    Object.entries(sighting).forEach(() => {
      var emptycell = d3.selectAll('tbody>td').text('');
    });
  });


filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

});

