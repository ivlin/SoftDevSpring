var total = 2472;
var pledged = 2366;
var unpledged = 106;

var states = [
    {"state": "Alabama", "pledged": 50, "unpledged": 0},
    {"state": "Alaska", "pledged": 28, "unpledged": 0},
    {"state": "Arizona", "pledged": 0, "unpledged": 58},
    {"state": "Arkansas", "pledged": 40, "unpledged": 0},
    {"state": "California", "pledged": 0, "unpledged": 172},
    {"state": "Colorado", "pledged": 0, "unpledged": 37},
    {"state": "Connecticut", "pledged": 0, "unpledged": 28},
    {"state": "Delaware", "pledged": 0, "unpledged": 16},
    {"state": "Florida", "pledged": 99, "unpledged": 0},
    {"state": "Georgia", "pledged": 76, "unpledged": 0},
    {"state": "Hawaii", "pledged": 19, "unpledged": 0},
    {"state": "Idaho", "pledged": 32, "unpledged": 0},
    {"state": "Illinois", "pledged": 69, "unpledged": 0},
    {"state": "Indiana", "pledged": 0, "unpledged": 57},
    {"state": "Iowa", "pledged": 30, "unpledged": 0},
    {"state": "Kansas", "pledged": 40, "unpledged": 0},
    {"state": "Kentucky", "pledged": 46, "unpledged": 0},
    {"state": "Louisiana", "pledged": 46, "unpledged": 0},
    {"state": "Maine", "pledged": 23, "unpledged": 0},
    {"state": "Maryland", "pledged": 0, "unpledged": 38},
    {"state": "Massachusetts", "pledged": 42, "unpledged": 0},
    {"state": "Michigan", "pledged": 59, "unpledged": 0},
    {"state": "Minnesota", "pledged": 38, "unpledged": 0},
    {"state": "Mississippi", "pledged": 40, "unpledged": 0},
    {"state": "Missouri", "pledged": 52, "unpledged": 0},
    {"state": "Montana", "pledged": 0, "unpledged": 27},
    {"state": "Nebrask", "pledged": 0, "unpledged": 36},
    {"state": "Nevada", "pledged": 30, "unpledged": 0},
    {"state": "New Hampshire", "pledged": 23, "unpledged": 0},
    {"state": "New Jersey", "pledged": 0, "unpledged": 51},
    {"state": "New Mexico", "pledged": 0, "unpledged": 24},
    {"state": "New York", "pledged": 0, "unpledged": 95},
    {"state": "North Carolina", "pledged": 72, "unpledged": 0},
    {"state": "North Dakota", "pledged": 0, "unpledged": 28},
    {"state": "Ohio", "pledged": 66, "unpledged": 0},
    {"state": "Oklahoma", "pledged": 43, "unpledged": 0},
    {"state": "Oregon", "pledged": 0, "unpledged": 28},
    {"state": "Pennsylvania", "pledged": 0, "unpledged": 17},
    {"state": "Rhode Island", "pledged": 0, "unpledged": 19},
    {"state": "South Carolina", "pledged": 50, "unpledged": 0},
    {"state": "South Dakota", "pledged": 0, "unpledged": 29},
    {"state": "Tennessee", "pledged": 58, "unpledged": 0},
    {"state": "Texas", "pledged": 155, "unpledged": 0},
    {"state": "Utah", "pledged": 0, "unpledged": 40},
    {"state": "Vermont", "pledged": 16, "unpledged": 0},
    {"state": "Virginia", "pledged": 49, "unpledged": 0},
    {"state": "Washington", "pledged": 0, "unpledged": 44},
    {"state": "Washington, D.C.", "pledged": 19, "unpledged": 0},
    {"state": "West Virginia", "pledged": 0, "unpledged": 34},
    {"state": "Wisconsin", "pledged": 0, "unpledged": 42},
    {"state": "Wyoming", "pledged": 26, "unpledged": 0}
];

var pledged = []
var unpledged = []

for (state of states){
    if (state.pledged > 0)
	pledged.push(state.pledged);
    if (state.unpledged > 0)
	unpledged.push(state.unpledged);
}

var f = d3.scale.linear()
  .domain([0,d3.max(pledged.concat(unpledged))])
  .range([0,420])

d3.select(".chart")
  .append("span")
    .style("background",function(d){return "#FFAAAA";})
    .text(function(d){
	var pledgeTotal=0;
	for (i of pledged){
	    pledgeTotal+=i;
	}
	return "Pledged:"+pledgeTotal;
    });
 
d3.select(".chart")
  .append("span")
    .style("background",function(d){return "#BBBBBB";})
    .text(function(d){
	var unpledgeTotal=0;
	for (i of unpledged){
	    unpledgeTotal+=i;
	}
	return "Unpledged:"+unpledgeTotal;
    });

d3.select(".chart")
  .selectAll("div")
    .data(states)
  .enter().append("div")
    .text(function(d){return d.state})
  .append("div")
    .style("width",function(d){
	return f(d.pledged+d.unpledged) + "px";
    })
    .style("background-color",function(d){
	if (d.pledged > 0)
	    return "#FF9999";
	else
	    return "#BBBBBB";
    })
    .text(function(d){return d.pledged+d.unpledged;});

/*
Selection methods return the selection
Convention: 2 space indent for unchanged selection
4 space indent for modified selection
*/

