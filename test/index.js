var data = [4,8,15,16,23,42]

var f = d3.scale.linear()
  .domain([0,d3.max(data)])
  .range([0,420])

d3.select(".chart")
  .selectAll("div")
    .data(data)
  .enter().append("div")
    .style("width",function(d){return f(d) + "px";})
    .text(function(d){return d;});

/*
Selection methods return the selection
Convention: 2 space indent for unchanged selection
4 space indent for modified selection
*/

