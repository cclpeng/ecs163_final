var hours = [];
var maxHours = 0;
var mapKey;
var key;
var durations = [];
var countOfDurations;
var maxDuration;
var minDuration;
var divisions = [];
var maxDivisions;

$(document).ready(function() {



//DRAW MAP OF US States
//-------------------------------
  var width = 700;
  var height = 550;

var directions = d3.select("body").append("p").text("Click to set your location\n").style("font-weight", "bold")
.style("text-align", "center");

  mapKey = d3.select("body").append("p")
  .text("KEY: ")
  .style("text-align", "center");

  mapKey.append().text("Bike Stations")
    .style("color", "DarkRed")
    .style("font-weight", "bold");

  var PeninsulaCenterLat = 39.1;
  var PeninsulaCenterLng = -98.1;
  //create an svg for the map visualisation
  var svgMap = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  var projection = d3.geoMercator()
      .scale(640)
      .translate([width / 2, height / 2])
      .center([PeninsulaCenterLng, PeninsulaCenterLat]);

  svgMap.selectAll("path")
    .data(states.features)
    .enter().append("path")
    .attr("d", d3.geoPath().projection(projection))
    .attr('data-id', function(d) 
    {
      return d.id;
    })
    .attr('data-name', function(d) 
    {
      return d.properties.name;
    })
    .style("fill", "#ffffff")
    .style("stroke", "black");

});