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

//var directions = d3.select("body").append("p").text("Click to set your location\n").style("font-weight", "bold")
//.style("text-align", "center");

 // mapKey = d3.select("body").append("p")
 // .text("KEY: ")
 // .style("text-align", "center");

  //mapKey.append().text("Bike Stations")
  //  .style("color", "DarkRed")
  //  .style("font-weight", "bold");

  var USACenterLat = 39.1;
  var USACenterLng = -98.1;
  //create an svg for the map visualisation
  var svgMap = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

  var projection = d3.geoMercator()
      .scale(640)
      .translate([width / 2, height / 2])
      .center([USACenterLng, USACenterLat]);








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
    .style("fill", "blue")
    .style("stroke", "white")
    .style("fill-opacity", 0.6)
    .on("mouseover", mouseover)
    //.on("mousemove", mousemove)
    .on('mouseout', mouseout);





  function mouseover()
  {
    d3.select(this).style('fill-opacity', 1);
    var xPosition = d3.mouse(this)[0] - 10;
    var yPosition = d3.mouse(this)[1] - 10;

    svgMap.append("text")
                        .attr("x", xPosition)
                        .attr("y", yPosition)
                        .attr("id", "#tooltip")
                        .style("fill", "Black")
                        .attr("text-anchor", "middle")
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "15px")
                        .attr("font-weight", "bold")
                        .attr("fill", "black")
                        .text("HI TOM");



    
  };


  /*function mousemove(d){
    d3.select("#tooltip").remove();
    d3.selectAll("text").remove();


    var xPosition = d3.mouse(this)[0] - 10;
    var yPosition = d3.mouse(this)[1] - 10;

    svgMap.append("text")
                        .attr("x", xPosition)
                        .attr("y", yPosition)
                        .attr("id", "#tooltip")
                        .style("fill", "Black")
                        .attr("text-anchor", "middle")
                        .attr("font-family", "sans-serif")
                        .attr("font-size", "15px")
                        .attr("font-weight", "bold")
                        .attr("fill", "black")
                        .text("HI TOM");

  };*/

  

  function mouseout()
  {
    d3.select(this).style('fill-opacity', .6);
    //d3.select("#tooltip").remove();
    d3.selectAll("text").remove();

    //console.log("removed");

    
  };

//FINISH DRAWING MAP OF THE STATES. THE MOUSEOVER FUNCTION IS ALSO DEFINED HERE






});