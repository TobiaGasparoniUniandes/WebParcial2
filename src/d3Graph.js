
var data = [
    {
      name: "Breaking Bad",
      seasons: 5,
      episodes: 62
    },
    {
      name: "Orange Is the New Black",
      seasons: 6,
      episodes: 91
    },
    {
      name: "Juego de Tronos",
      seasons: 7,
      episodes: 73
    },
    {
      name: "The Big Bang Theory",
      seasons: 12,
      episodes: 279
    },
    {
      name: "Sherlock",
      seasons: 4,
      episodes: 13
    },
    {
      name: "A Very English Scandal",
      seasons: 2,
      episodes: 3
    }
  ];

var margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
}
width = 700 - margin.left - margin.right;
height = 500 - margin.top - margin.bottom;

// format the data
data.forEach(function (d) {
    console.log(d.episodes);
    parseDate = d3.timeParse("%Y");
    d.episodes =+ parseDate(d.episodes);
    console.log(d.episodes);
    d.seasons =+ d.seasons;
});


var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// Scale the range of the data
x.domain(d3.extent(data, function (d) {
     return d.episodes;
}));
y.domain([0, d3.max(data, function (d) {
     return d.seasons;
})]);

var svg = d3.select("#canvas").append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");



svg.selectAll("dot")
     .data(data).enter()
     .append("circle")
     .attr("r", 10)
     .attr("cx", function (d) {
           return x(d.episodes);
     })
     .attr("cy", function (d) {
          return y(d.seasons);
     })
     .attr("fill", "#ff9d5c");

svg.selectAll("text")
     .data(data).enter()
     .append("text")
     .attr("cx", function(d) {return d.episodes +50})
     .attr("cy", function(d) {return d.seasons +50})
     .text(function(d) {return d.name})
     .attr("font-size", "15px")

svg.append("g")
     .attr("transform", "translate(0," + height + ")")
     .call(d3.axisBottom(x)
           .ticks(7));
svg.append("g")
     .call(d3.axisLeft(y).tickFormat(function (d) {
          return d3.format(".0f")(d)})
          .ticks(12));

